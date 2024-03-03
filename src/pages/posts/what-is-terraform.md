---
title: What is Terraform? A Quick Devops Overview
tags: devops
layout: "../../layouts/BlogPost.astro"
date: "2023-11-02"
preview: "Terraform is an infrastructure provisioning tool. It's open source, made by Hashicorp, and has integrations with dozens of cloud platforms including AWS, Azure and GCP, anad many others.


Terraform allows you to automate and manage your infrastructure using declarative language. You say what you want to be true and terraform works out how to make it so."
---

Terraform is an infrastructure provisioning tool. It's open source, made by Hashicorp, and has integrations with dozens of cloud platforms including AWS, Azure and GCP, anad many others.

Terraform allows you to automate and manage your infrastructure using declarative language. You say what you want to be true and Terraform works out how to make it so.

You can use it to:

1. Provision infrastructure
2. Set up security and permissions
3. Configure networking
4. Create user accounts
5. Install necessary software, such as specific versions of Docker

Practically we use terraform to

- Create infrastructure
- Replicate infrastructure, for example if we wanted a staging environment
- Modify infrastructure, for example if we wanted to scale

## How does it work?

Terraform comes in two parts.

1. The Core is common to all configurations. It works out what to do.
2. Providers, are specific to particular configurations. They provide integrations with a huge range of services. They work out how to action the plan provided by the Core.

The Core accepts a `config.tf` file and a state. It then compares the current state to the config and works out what needs to be done, and in what order, to get to the desired state. If no infrastructure exists, the state will be empty. If infrastrucure has already been provisioned, it will work out what needs to change in order to get to the new state. It creates an execution plan and passes that over to the providers.

Providers are integrations with specific resources or technologies, such as EC2 instances or Kubernetes deployments. They receive the execution plan from Core, and work out how to execute that plan in their specific environment with their specific tech stack.

```
Core(config.tf, state) ---> Execution Plan ---> Providers ---> Infrastructure
```

## Practical Example

Say I need two EC2 servers. I might create `main.tf` file with a provider and a resource that looked something like this:

```sh
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "my_ec2" {
  count = 2
  instance_type = "t2.micro"
}
```

To run this script, I would first run

```sh
terraform init
```

...to initialize Terraform and download the required plugins.

I might then run:

```sh
terraform plan
```

...to review the actions Terraform will perform.

Finally:

```sh
terraform apply
```

...would execute the plan and apply the changes to AWS.

Terraform is widely used and it's probably a good idea to know a bit about if if you're planning on automating some devops. Scripts that can adapt to the environment they find themselves in are less brittle than hardcoded bash scripts.
