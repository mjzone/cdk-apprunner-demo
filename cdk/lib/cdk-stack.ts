import * as cdk from "@aws-cdk/core";
import { CfnService } from "@aws-cdk/aws-apprunner";

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnService(this, "CfnService", {
      serviceName: "my-apprunner-app",
      sourceConfiguration: {
        authenticationConfiguration: {
          connectionArn: "arn:aws:apprunner:us-west-2:885121665536:connection/apprunnerGithubConnector/7f215ea722b241e2bd47ffbc67a3d048",
        },
        autoDeploymentsEnabled: true,
        codeRepository: {
          repositoryUrl: "https://github.com/mjzone/cdk-apprunner-demo",
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
