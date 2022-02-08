import * as cdk from "@aws-cdk/core";
import { CfnService } from "@aws-cdk/aws-apprunner";

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnService(this, "CfnService", {
      serviceName: "my-apprunner-app",
      sourceConfiguration: {
        authenticationConfiguration: {
          connectionArn: "Add github connection ARN here",
        },
        autoDeploymentsEnabled: true,
        codeRepository: {
          repositoryUrl: "Add github repository URL here",
          sourceCodeVersion: {
            type: "BRANCH",
            value: "main",
          },
          codeConfiguration: {
            configurationSource: "REPOSITORY",
          },
        },
      },
      healthCheckConfiguration: {
        path: "/health",
      },
    });
  }
}
