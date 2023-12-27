import * as cdk from 'aws-cdk-lib';
import { CfnSubnet, CfnVPC } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SubStack extends cdk.Stack {

  constructor(scope: Construct, id: string, vpc: CfnVPC, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnSubnet(this, 'Subnet', {
        cidrBlock: '10.0.1.0/24',
        vpcId: vpc.ref
    });
  }
}
