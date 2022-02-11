#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { appStack } from '../lib/app-stack';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new appStack(app, 'appStack');
new PipelineStack(app, 'PipelineStack', {
  env: {
    account: '227615387827',
    region: 'eu-west-1',
  },
});

app.synth();