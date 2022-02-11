import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'Pipeline', {
      pipelineName: 'markPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('Mark-CloudNation/project1', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });
  }
}