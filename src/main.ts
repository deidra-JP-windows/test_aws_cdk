#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from './lib/vpc_stack';
import { SubStack } from './lib/sub_stack';

const app = new cdk.App();

// 環境変数セット
const argContext = 'environment';
const envKey = app.node.tryGetContext(argContext);
if (!envKey) throw new Error(`Please specify environment with context option. ex) cdk deploy -c ${argContext}=dev`);
const env = app.node.tryGetContext(envKey);
if (!env) throw new Error('Invalid environment');

// dev環境
const devVpcStack = new VpcStack(app, 'DevVpcStack', {
  stage: env['stage'],
  region: env['region'],
  cidrBlock: env['cidrBlock']
}, {});

new SubStack(app, 'DevSubStack', devVpcStack.vpc, {
});

// stg環境
const stgVpcStack = new VpcStack(app, 'StgVpcStack', {
  stage: env['stage'],
  region: env['region'],
  cidrBlock: env['cidrBlock']
}, {});

new SubStack(app, 'StgSubStack', stgVpcStack.vpc, {
});

// prod環境
const prodVpcStack = new VpcStack(app, 'ProdVpcStack', {
  stage: env['stage'],
  region: env['region'],
  cidrBlock: env['cidrBlock']
}, {});

new SubStack(app, 'ProdSubStack', prodVpcStack.vpc, {
});