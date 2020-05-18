import * as cdk from '@aws-cdk/core';
import * as lab_service from '../lib/lab_service';

export class LabTypeStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lab_service.LabService(this, 'LabService');
  }
}
