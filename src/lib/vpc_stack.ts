import * as cdk from 'aws-cdk-lib';
import { CfnVPC } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { VpcEnv } from '../defin/vpc';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class VpcStack extends cdk.Stack {
  public readonly vpc: CfnVPC;

  constructor(scope: Construct, id: string, env: VpcEnv, props?: cdk.StackProps) {
    super(scope, id, props);

    this.vpc = new CfnVPC(this, 'Vpc', {
      cidrBlock: '10.0.0.0/16',
      tags: [{
        key: `${env.stage}_cfn_vpc_1`,
        value: `${env.stage} vpc test 1`
      }]
    });
  }
}
