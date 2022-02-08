#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';
import { WorkshopPipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new AppStack(app, 'AppStack');
new WorkshopPipelineStack(app, 'CdkWorkshopPipelineStack');