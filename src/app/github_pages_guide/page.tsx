"use client";
import Terminal from "@/components/terminal";
import {
  Box,
  Text,
  Divider,
  AbsoluteCenter,
  UnorderedList,
  OrderedList,
  ListItem,
  BoxProps,
  Image,
  Code,
  Flex,
  Link,
} from "@chakra-ui/react";

interface StyledTextboxProps extends BoxProps {
  children: React.ReactNode;
}

interface StyledTextboxProps {
  children: React.ReactNode;
}

const StyledTextbox: React.FC<StyledTextboxProps> = ({ children }) => {
  return (
    <Box
      border="1px"
      borderColor="#4A4E69"
      p={4}
      m={4}
      borderRadius="md"
      boxShadow="lg"
      bg="#3C3F51"
    >
      {children}
    </Box>
  );
};

const PageDivider = ({ title }: { title: string }) => (
  <Box position="relative" padding="10">
    <Divider />
    <AbsoluteCenter bg="#31363F" px="4">
      {title}
    </AbsoluteCenter>
  </Box>
);

export default function github_pages_guide() {
  return (
    <main>
      <Box p={4} bg={"#31363F"} h={"100%"} textColor={"white"}>
        <Text fontSize="3xl" mb={5}>
          Creating a portfolio{" "}
        </Text>
        <Text fontSize="xs">
          Author: Gaute Greiff Flægstad
          <br />
          Last updated: August 22nd 2024
          <br />
          <br />
        </Text>
        <PageDivider title="Introduction" />
        <Text>
          <br />
          This guide will teach you how to deploy your own "home made" portfolio
          to an online web page. For hosting this page we will use Githubs
          "Github Pages", which is a service provided by Github to host your own
          web page on their servers. This comes with some limitations, but for
          the purpose of this course, and to deploy a portfolio, it works just
          fine. As you may or may not know we use Gitlab for development in
          Propulse, so why would we use Github now? Actually no particular
          reason. If you prefer Gitlab, there is an identical feature called
          Gitlab Pages that you can use. BUT I recommend not using you Propulse
          account, as you may want to use this portfolio after your time in
          Propulse :). I have a personal account on Github so thats why I chose
          it, and also it's not a bad thing to have experience with both
          websites.
          <br />
          <br />
          In terms of development, this project is purely frontend.
          Github/Gitlab Pages only support hosting of
          <i> static </i> web pages. That means no server-side processing is
          allowed (ex: no database :c). We will use React with Next.js for
          frontend, which is a widely used and modern componet based framework.
          The concept is to build resuable chunks of code to make development of
          more complex sites easier. We will also use a component library called
          Material UI to import prebuilt components. These kinds of libraries
          can save a lot of time, and are very easy to customize to your liking,
          as will be showed later. As for the programming language, Typescript
          is my preferred option. It is basically Javascript, but with type
          declaration to save yourself some confusing errors while developing.
          For styling, either css, scss, or tailwind can be used, but when using
          a component library I find that I rarely (or never) have a need for
          it.
          <br />
          <br />
        </Text>
        <Text>
          So why are we doing this? The main purpose of this course is for the
          members of DevOps to get hands on experience with web development, to
          practise use of frontend tools and to get used to Git-commands and
          repositories. This experience will come in handy during development of
          this years projects, and probably in the future as well.
          <br />
          Another benefit is that you are going to build an actual portfolio
          that comes in handy when applying for jobs. Of course there are
          websites nowadays that can do this for you, but it`s a much bigger
          flex to have built it yourself!
        </Text>
        <PageDivider title="Course content" />
        <Box>
          <Text>The content of this course is as follows:</Text>
          <UnorderedList>
            <ListItem>Create a repository </ListItem>
            <ListItem>Add an SSH key </ListItem>
            <ListItem>Clone the repository</ListItem>
            <ListItem>Install some needed tools</ListItem>
            <ListItem>Create the react project </ListItem>
            <ListItem>Add auto syncing </ListItem>
          </UnorderedList>
        </Box>

        <PageDivider title="Create a repository" />
        <Text>
          A repository is an online version tracker of your application. We
          develop on a local version on our pc, and use git to keep the
          repository updated with new changes. It is essential when working
          together with others, as it allows each developer on a project to keep
          track of new changes. Start by creating the repository like this:
        </Text>
        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Step 1
            </Text>
            <Text mb={4}>
              Log into Github and press the "+" icon. Select "New Repository"
            </Text>
            <Image
              src="/create_new_rep.png"
              alt="create_new_rep"
              height={"300px"}
              width={"auto"}
            />
          </Box>
        </StyledTextbox>

        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Step 2
            </Text>
            <Text>
              Name your repository{" "}
              <Code backgroundColor={"gray.700"} color={"white"}>
                "username".github.io
              </Code>
              .
            </Text>
            <Text fontWeight={"bold"}>
              NOTE: The repository name MUST contain lower case letters only,
              dont repeat my mistake!
            </Text>
            <Text mb={4}>
              The rest of the settings can be left unchanged. Now press "Create
              Repository".
            </Text>
            <Image
              src="/name_repository.png"
              alt="name_repository"
              height={"300px"}
              width={"auto"}
            />
          </Box>
        </StyledTextbox>

        <PageDivider title="Add an SSH key" />
        <Text mt={2} mb={2}>
          <i>If you already have an SSH key, skip to the next segment</i>
        </Text>
        <Text>
          Now, we want to store a local verison of the repository on our pc.
          This is done by <i> cloning </i> it to the pc`s storage. To clone a
          repository we use something called an SSH-key, which is an
          authentication tool for secure communication between our pc and remote
          servers. This is necessary to create a connection between the remote
          tory and our local one. The key is unique to your computer, and must
          be added to your Github profile. To check if you already have one
          click on your Profile icon &rarr; Settings &rarr; SSH and GPG keys.
          <br />
          <br />
          If you don`t, check if you have one genereated on your computer and
          possibly generate a new one
        </Text>

        <Flex width="100%">
          <Box flex="1">
            <StyledTextbox>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                Mac/Linux
              </Text>
              <OrderedList>
                <ListItem fontWeight={"bold"}>Open a terminal</ListItem>
                <ListItem>
                  <Text fontWeight={"bold"}>Check for SSH Key Files:</Text>
                  <Text>
                    By default, SSH keys are stored in the ~/.ssh directory. You
                    can list the files in this directory with the following
                    command:
                  </Text>
                  <Terminal
                    commands={`
                    ls -l ~/.ssh
                  `}
                  />
                  <Text>
                    Look for a file named{" "}
                    <Code backgroundColor={"gray.700"} color={"white"}>
                      id_rsa.pub{" "}
                    </Code>{" "}
                    or something similar. See how to connect it to your account
                    under this segment.
                    <br />
                    <br />
                    If you receive an error that ~/.ssh doesn't exist, you do
                    not have an existing SSH key pair in the default location.
                    You can create a new SSH key pair in the next step.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontWeight={"bold"}>Generate SSH key:</Text>
                  <Text>
                    Use the ssh-keygen command to generate a new SSH key pair,
                    replace the email used in the example with your GitHub email
                    address.
                  </Text>
                  <Terminal
                    commands={`
                  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
                  `}
                  />
                  <Text>
                    When prompted to enter a file to save the key, press Enter
                    for default location.
                    <br />
                    When prompted to enter passphrase, either set a memorable
                    password or press Enter to leave it empty. Setting a
                    password is of course more secure, but isn`t strictly
                    necessary. If you choose to do so, I recommend adding your
                    key to an SSH agent to avoid having to enter a password
                    every time the key is used. Check out SSH agents in
                    <Link
                      isExternal
                      color="blue.500"
                      href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
                    >
                      {" "}
                      Githubs documentation
                    </Link>
                    .
                    <br />
                    <br />
                    To print out the key run this command:
                  </Text>
                  <Terminal
                    commands={`
                  cat ~/.ssh/id_rsa.pub
                  `}
                  />
                  <Text>
                    Assuming that your key is named{" "}
                    <Code backgroundColor={"gray.700"} color={"white"}>
                      id_rsa.pub{" "}
                    </Code>
                    . Note: Whatever your key is named, make sure it has{" "}
                    <Code backgroundColor={"gray.700"} color={"white"}>
                      .pub{" "}
                    </Code>{" "}
                    as it is the public key we want to give to your Github
                    profile.
                    <br />
                    <br />
                    Now select the entire key and copy it.
                  </Text>
                </ListItem>
              </OrderedList>
            </StyledTextbox>
          </Box>
          <Box flex="1">
            <StyledTextbox>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                Windows
              </Text>
              <OrderedList>
                <ListItem fontWeight={"bold"}>
                  Open PowerShell or Command Prompt
                </ListItem>
                <ListItem>
                  <Text fontWeight={"bold"}>Check for SSH Key Files:</Text>
                  <Text>
                    SSH keys are typically stored in the
                    C:\Users\&lt;YourUsername&gt;\.ssh directory. You can list
                    the files in this directory with the following command:
                  </Text>
                  <Terminal
                    commands={`
                    dir C:\\Users\\<YourUsername>\\.ssh
                  `}
                  />
                  <Text>
                    Look for a file named{" "}
                    <Code backgroundColor={"gray.700"} color={"white"}>
                      id_rsa.pub{" "}
                    </Code>{" "}
                    or something similar. See how to connect it to your account
                    under this segment.
                    <br />
                    <br />
                    If you receive an error that [...]/.ssh doesn't exist, you
                    do not have an existing SSH key pair in the default
                    location. You can create a new SSH key pair in the next
                    step.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text fontWeight={"bold"}>Generate SSH key:</Text>
                  <Text>
                    Use the ssh-keygen command to generate a new SSH key pair,
                    replace the email used in the example with your GitHub email
                    address.
                  </Text>
                  <Terminal
                    commands={`
                  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
                  `}
                  />
                  <Text>
                    When prompted to enter a file to save the key, press Enter
                    for default location.
                    <br />
                    When prompted to enter passphrase, either set a memorable
                    password or press Enter to leave it empty. Setting a
                    password is of course more secure, but isn`t strictly
                    necessary. If you do choose to, I recommend adding your key
                    to an SSH agent to avoid having to enter a password every
                    time the key is used. Check out SSH agents in
                    <Link
                      isExternal
                      color="blue.500"
                      href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"
                    >
                      {" "}
                      Githubs documentation
                    </Link>
                    .
                    <br />
                    <br />
                    To print out the key run this command:
                  </Text>
                  <Terminal
                    commands={`
                  Get-Content C:\\Users\\<YourUsername>\\.ssh\\id_rsa.pub
                  `}
                  />
                  <Text>
                    Assuming that your key is named{" "}
                    <Code backgroundColor={"gray.700"} color={"white"}>
                      id_rsa.pub{" "}
                    </Code>
                    . Note: Whatever your key is named, make sure it has{" "}
                    <Code backgroundColor={"gray.700"} color={"white"}>
                      .pub{" "}
                    </Code>{" "}
                    as it is the public key we want to give to your Github
                    profile.
                    <br />
                    <br />
                    Now select the entire key and copy it.
                  </Text>
                </ListItem>
              </OrderedList>
            </StyledTextbox>
          </Box>
        </Flex>

        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Add your key to Github account
            </Text>
            <Text mb={4}>
              Once you have copied your public SSH key, it must be added to your
              Github account.
              <br />
              Navigate to "SSH and GPG keys", and press{" "}
              <Code backgroundColor={"gray.700"} color={"white"}>
                New SSH key{" "}
              </Code>
              .
            </Text>
            <Image
              src="/add_new_SSHKEY.png"
              alt="add_new_SSHKEY"
              height={"200px"}
              width={"auto"}
            />
            <Text mt={4} mb={4}>
              Name the key something that relates it to your computer, paste in
              the key, and press{" "}
              <Code backgroundColor={"gray.700"} color={"white"}>
                New SSH key{" "}
              </Code>
              .
            </Text>
            <Image
              src="/add_new_SSHKEY2.png"
              alt="add_new_SSHKEY2"
              height={"400px"}
              width={"auto"}
            />
          </Box>
        </StyledTextbox>

        <PageDivider title="Clone repository" />
        <Text>Time to clone!</Text>
        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Step 1
            </Text>
            <Text mb={4}>
              Navigate to the frontpage of your repository, under "Quick setup"
              press the{" "}
              <Code backgroundColor={"gray.700"} color={"white"}>
                SSH
              </Code>{" "}
              button, and copy the link.
            </Text>
            <Image
              src="/copy_clone_link.png"
              alt="copy_clone_link"
              height={"150px"}
              width={"auto"}
            />
          </Box>
        </StyledTextbox>

        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Step 2
            </Text>
            <Text mb={4}>
              Open a terminal and navigate into the folder where you want your
              project to be located.
              <br />
              Then paste in this command, replace the link with the one from
              your repository.
              <br />
              You can ignore the warning about cloning an empty respository.
            </Text>
            <Terminal
              commands={`
              git clone git@github.com:GauteGFTest/gautegftest.github.io.git
              `}
            />
          </Box>
        </StyledTextbox>
        <PageDivider title="Install some needed tools" />
        <Text mb={8}>
          Finally it`s time!
          <br />
          <br />
          Well... almost. We need to make sure that some important stuff is
          installed. More precisely, we want Node, NPM and NVM.
        </Text>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          NVM (Node Version Manager)
        </Text>
        <Text mb={4}>
          As the name suggests this is a tool to manage which version of Node is
          used. It`s very useful for swapping between different versions,
          because once a project is made with one version, it may not be
          compatible with others (This itself is an annoying weakness of Node,
          but i`m willing to live with it). As for now, we can use it to install
          Node.
        </Text>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          NPM (Node Package Manager)
        </Text>
        <Text mb={4}>
          This is also a tool for Node and is used for installing packages and
          dependencies needed for your application. NPM is automatically
          installed when installing Node.
        </Text>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Node.js
        </Text>
        <Text mb={4}>
          Okay but what is Node? Honestly im not sure how to explain this,
          something about running javascript code or so. What I do know is that
          it's insanely useful for APIs, UI, and library management, among other
          things. If you don't know what that means, don't worry it's not
          important for now. You can try to make sense of ChatGPTs response if
          you want:
          <br />
          <Code backgroundColor={"gray.700"} color={"white"}>
            "Node.js is an open-source, cross-platform JavaScript runtime
            environment that allows you to run JavaScript code on the
            server-side. It uses a non-blocking, event-driven architecture,
            which makes it efficient and suitable for scalable, high-performance
            applications".
          </Code>
        </Text>
        <Flex width={"100%"}>
          <Box flex={"1"}>
            <StyledTextbox>
              <Box>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Mac/Linux
                </Text>
                <Text>First check if you already have nvm:</Text>
                <Terminal
                  commands={`
                  nvm -v
                  `}
                />
                <Text>
                  If you dont, install with this command and make sure to
                  restart your terminal after.
                </Text>
                <Terminal
                  commands={`
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
                `}
                />
                <Text>
                  Now install Node. This can be done with NVM, but if it doesnt
                  work you can do it from the{" "}
                  <Link
                    isExternal
                    color="blue.500"
                    href="https://nodejs.org/en"
                  >
                    {" "}
                    website
                  </Link>
                  .
                </Text>
                <b>
                  NOTE: Choose v22 (latest), not LTS (Long Term Support, which
                  is now v20). Version 22 will be LTS later this year, so
                  getting the newest version now is beneficial.
                </b>
                <Terminal
                  commands={`
              nvm install node
              `}
                />
                <Text>
                  This command will install the newest version. You can also
                  install any version you want and swap between them with{" "}
                  <Code backgroundColor={"gray.700"} color={"white"}>
                    nvm install XX.XX.X{" "}
                  </Code>{" "}
                  and{" "}
                  <Code backgroundColor={"gray.700"} color={"white"}>
                    nvm use XX.XX.X
                  </Code>
                  .
                  <br />
                  <br />
                  Now check if they installed successfully:
                </Text>
                <Terminal
                  commands={`
              node -v
              npm -v
              `}
                />
              </Box>
            </StyledTextbox>
          </Box>
          <Box flex={"1"}>
            <StyledTextbox>
              <Box>
                <Text fontSize={"xl"} fontWeight={"bold"}>
                  Windows
                </Text>
                <Text>First check if you already have nvm:</Text>
                <Terminal
                  commands={`
                  nvm -v
                  `}
                />
                <Text>
                  If you dont, download the installer from the{" "}
                  <Link
                    isExternal
                    color="blue.500"
                    href="https://nodejs.org/en"
                  >
                    {" "}
                    NVM for Windows Github Page
                  </Link>
                  . Choose the{" "}
                  <Code backgroundColor={"gray.700"} color={"white"}>
                    nvm-setup.exe
                  </Code>{" "}
                  file.
                </Text>
                <br />
                <Text>
                  Now install Node. This can be done with NVM, but if it doesnt
                  work you can do it from the{" "}
                  <Link
                    isExternal
                    color="blue.500"
                    href="https://nodejs.org/en"
                  >
                    {" "}
                    website
                  </Link>
                  .
                </Text>
                <b>
                  NOTE: Choose v22 (latest), not LTS (Long Term Support, which
                  is now v20). Version 22 will be LTS later this year, so
                  getting the newest version now is beneficial.
                </b>
                <Terminal
                  commands={`
              nvm install latest
              `}
                />
                <Text>
                  This command will install the newest version. You can also
                  install any version you want and swap between them with{" "}
                  <Code backgroundColor={"gray.700"} color={"white"}>
                    nvm install XX.XX.X{" "}
                  </Code>{" "}
                  and{" "}
                  <Code backgroundColor={"gray.700"} color={"white"}>
                    nvm use XX.XX.X
                  </Code>
                  .
                  <br />
                  <br />
                  Now check if they installed successfully:
                </Text>
                <Terminal
                  commands={`
              node -v
              npm -v
              `}
                />
              </Box>
            </StyledTextbox>
          </Box>
        </Flex>
        <PageDivider title="Creating the react project" />
        <Text>Nooooow, its time..</Text>
        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Create a next.js app
            </Text>
            <Text mb={4}>
              Open a terminal and navigate into your cloned repository (should
              be a folder named{" "}
              <Code backgroundColor={"gray.700"} color={"white"}>
                "username".github.io
              </Code>
              ).
              <br />
              <br />
              Use the{" "}
              <Code backgroundColor={"gray.700"} color={"white"}>
                npx
              </Code>{" "}
              command to create a new Next.js project in the current directory.
              <Code backgroundColor={"gray.700"} color={"white"}>
                npx
              </Code>{" "}
              is a tool that comes with npm and allows you to run commands from
              packages without globally installing them.
            </Text>
            <Terminal
              commands={`
              npx create-next-app@latest .
              `}
            />
            <Text>
              You will then be prompted to choose some configurations for you
              new app. If you know what you're doing, choose to your liking. If
              not, I recommend these options:
            </Text>
            <br />
            <Image
              src="/create_next_app_config.png"
              alt="create_next_app_config"
              height={"200px"}
              width={"auto"}
            />
            <br />
            <Text>
              I wont go into detail about what these configs are, but here is a
              short overview:
            </Text>
            <br />
            <UnorderedList spacing={3}>
              <ListItem>
                <Text as="b">Typescript:</Text> This is essentially Javascript,
                or at least it builds on it. Unlike Javascript, Typescript lets
                you define types for variables, function parameters, and return
                values. This will help you catch errors at compile-time rather
                than runtime, which is very useful for debugging.
              </ListItem>
              <ListItem>
                <Text as="b">ESLint:</Text> This is a tool for consistent
                formatting of code throughout your application. Especially nice
                to have on group projects.
              </ListItem>
              <ListItem>
                <Text as="b">Tailwind CSS:</Text> CSS is for styling your web
                app. Tailwind CSS is a utility-focused framework for CSS that
                comes with pre-defined classes that you can use directly on HTML
                objects to style them. CSS can also do this, but Tailwind does
                it smoother and more compact (though I will argue way less
                readable as well). As we plan to use a component library for
                this project, you won't really have need of Tailwind, but nice
                to have in case.
              </ListItem>
              <ListItem>
                <Text as="b">/src:</Text> If you say yes to this, all the main
                application files of the website will be placed here. It's just
                an extra layer in your file system, and it separates your source
                code from your config files, gitignored stuff, and other extra
                resources. I like to have this option enabled.
              </ListItem>
              <ListItem>
                <Text as="b">App Router:</Text> This setting uses the newest
                next.js routing features, for referencing files throughout your
                filesystem. For example, in a normal React project you would put
                all the pages that you want to render inside a /pages folder,
                but with this system you can put your rendered pages anywhere as
                long as you call the file page.tsx. You can then reference that
                page with the folder it is placed in. Here is an example:
              </ListItem>
            </UnorderedList>

            <Terminal
              commands={`
              /app
                ├── dashboard/
                │   └── page.tsx     # Renders at /dashboard
                ├── profile/
                │   └── page.tsx     # Renders at /profile
                └── layout.tsx       # Shared layout for all routes
              `}
            />
            <UnorderedList spacing={3}>
              <ListItem>
                <Text as="b">Import alias:</Text>An alias defines how you can
                reference other files, for exmaple when you want to import
                something from them. By default if you want to acces other files
                from a nested component, you would have to reference backwards
                like this "../../..", but with custom alias you can avoid this
                by setting up some rules. This is actually super useful, but I
                have chosen to not include it now because we need to focus on
                the important stuff first. Also, this can easily be configured
                after the project is made!
              </ListItem>
            </UnorderedList>
          </Box>
        </StyledTextbox>
        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Finishing touches
            </Text>
            <Text>
              Your now have a next.js project! The first thing you should do is
              to open the project in your code editor. Then make an initial
              commit to your repository. This is done by adding all files to the
              staging area, commiting them, and pushing them.
              <br />
              <br />
              You should now be able to see your project at you github pages
              url. It may only display the readme page, but we will fix that in
              the next segment.
              <br />
              <br />
              Using the deployed website under development is impractical, as it
              takes a while to update. Instead, we want to start a development
              server with hot refresh so we can see all our changes in real
              time.
              <br />
              To start the development server, run this command, and then
              navigate to localhost:3000 in your browser.
            </Text>
            <Terminal
              commands={`
              npm run dev
              `}
            />
            <Text>
              You can now start developing your portfolio!
              <br />
              page.tsx is the main file for the page you see when you navigate
              to the website. You can edit this file to change the content.
              <br />
              This guide wont go into detail on how to design your website, but
              there are plenty guides online or you can ask ChatGPT for help.
              <br />
              <br />
              If you want to learn more about Next.js, check out their{" "}
              <Link
                isExternal
                color="blue.500"
                href="https://nextjs.org/learn/basics/create-nextjs-app"
              >
                {" "}
                tutorial
              </Link>
              .
            </Text>
          </Box>
        </StyledTextbox>
        <PageDivider title="Add auto syncing" />
        <StyledTextbox>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              Automatic deployment
            </Text>
            <Text mb={4}>
              Navigate into your repository, and click "Settings".
              <br />
              In the "Code and automation" section of the sidebar, click "Pages"
              <br />
              Under "Build and deployment", select "Github Actions", and then
              select "Configure"
            </Text>
            <Image
              src="/configure_deployment.png"
              alt="donfigure_deployment.png"
              height={"300px"}
              width={"auto"}
            />
            <Text>
              You are now about to create a yml file that will automatically
              deploy your project to Github Pages. Press the green "Commit
              changes" button in the top right corner, and when a window pops
              up, press "Commit changes" again.
              <br />
              <br />
              Now you need to <b>pull</b> this change to your local repository.
              From now on, when you push changes to the repository, the updated
              project will automatically be deployed to Github Pages.
              <br />
              <br />
              Test this by making a small change to page.tsx, commiting it, and
              pushing it to the repository.
              <br />
              Go into the actions tab on guthub and see if the deployment is
              successful. It should look something like this:
            </Text>
            <br />
            <Image
              src="/test_commit_loading.png"
              alt="test_commit_loading.png"
              height={"300px"}
              width={"auto"}
            />
            <br />
            <Image
              src="/test_commit_success.png"
              alt="test_commit_success.png"
              height={"300px"}
              width={"auto"}
            />
          </Box>
        </StyledTextbox>
      </Box>
    </main>
  );
}
