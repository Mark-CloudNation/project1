import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { appStack } from '../src/lib/app-stack';

test('Snapshot', () => {
  const app = new App();
  const stack = new appStack(app, 'test');

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});