## BabyBeanPT Website
Authors: thejohnmathews & jillmathews
Framework: NextJS with Typescript and TailwindCSS

## FAQ for Mom:

    - How do I get to the correct folder?

        We can use the cd and ls command to naviagte

            ```bash
            cd filename (moves forward into folders)
            cd ..       (moves backward out of folders)
            ls          (prints all the files where you are at)
            pws         (shows your cuurrent location in filesystem)
            ```

    - How do I see the edits to my website locally?

        1) Open a bash terminal session

        2) Navigate to the project folder (see commands above)

            ```bash
            cd babybeanpt
            ```

        3) Once in the folder, run the development server

            ```bash
            npm run dev
            ```

        4) look at the terminal and use cmd+click on the URL that looks like 

            ```bash
            http://localhost:3000
            ```

        5) You should see your website now

    - I made some changes to my website, how do I see those changes at the actual URL?

        Ok, we need to "push" our code to GitHub

        1) Ensure you are still in the project folder by using this command

            ```bash
            ls 
            ```

            You should see all your project files such as: node_modules package.json public src

        2) Make sure the code has no bugs by running this command

            ```bash
            npm run build
            ```

            If this command comes back clean (warnings are ok), your code is good

        3) Run these git commands, it is important to do it in this order!

            ```bash
            git pull
            git add *
            git commit -m "Your Message Here!"
            git push
            ```

        3) Once you run those commands, your code is saved online and should appear on your site in about a minute

    - I tried running those "git" commands at its aksing me funny things!

        Call me over or ask me to do the changes on my end