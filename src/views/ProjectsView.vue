<template>
  <div class="custom-project-container">
    <div class="custom-title">Projects</div>
    <hr class="w-48 h-1 mx-auto my-2 bg-gray-300 border-0 rounded" />

    <p class="custom-information-text indent-5 pb-10">
      I have spent some time creating some personal projects both for college classes as well as for
      fun! Some of these were created during my time at Pitt and some have been revisited after.
    </p>

    <div class="project-container">
      <div class="custom-subtitle pt-10">National Park React Native App</div>
      <div class="custom-information-text-container flex flex-row">
        <div class="custom-project-information-text">
          This project was a combination of a college software project and passion idea that I had.
          I created a react native app that uses Expo Go to host on my local machine and display on
          my iPhone. The app is a bucket-list tracker which displays the country's national parks
          and information about them, allows the user to add to one of two lists: Want-to-visit and
          been-there. The basic app is more or less a todo-list, but with my current full-stack
          knowledge I plan on taking it into a new direction: An outdoor-centric national park
          social media. The app will feature account creation, user posts and the connection between
          user accounts via friending.
        </div>
        <div class="custom-project-img-bundler">
          <img src="../assets/SmokyMountains.jpeg" class="h-64 rounded-lg relative" />
          <a class="project-link" href="https://github.com/cag185/National-Park-Bucket-List"
            >Github Link</a
          >
        </div>
      </div>
    </div>

    <div class="project-container">
      <div class="custom-subtitle pt-10">
        Autonomous Facial Recognition Door Locking Security System
      </div>
      <div class="custom-information-text-container flex flex-row">
        <div class="custom-project-information-text">
          This project was a college idea where we were in a team of three engineers, each
          responsible for contributing to creating an autonomous security device. We decided to
          create a security system based on facial recognition and machine learning to create unique
          facial profiles for users that can be used as passkeys. The device was based off of the
          RaspberryPi micro computer. I created the machine learning software in Python to scan a
          user's face, record a video and chop it into hundreds of frames. Each frame becomes an
          array of features to train the machine learning model and is referenced in real time via
          the camera connected to the Pi to determine if the user should be granted access to the
          system or not. I made use of the public python library Sci-kit learn for this project.
        </div>
        <div class="custom-project-img-bundler">
          <img src="../assets/FacialRecognition.jpg" class="h-64 rounded-lg relative" />
          <a class="project-link" href="https://github.com/cag185/Facial-Recognition"
            >Github Link</a
          >
        </div>
      </div>
    </div>

    <div class="project-container">
      <div class="custom-subtitle pt-10">Personal Photography Website</div>
      <div class="custom-information-text-container flex flex-row">
        <div class="custom-project-information-text">
          Photoraphy has always been a hobby of mine. I love creating amazing compositions and
          framing people in a new way. I decided to use my full stack skills to create a vue based
          web application where I can showcase my photography skills and generate exposure to my
          creative hobbies. I have future plans to expand on the project so that potential clients
          can reach out to me via a dynamic contact me page, and potentially incorporate a
          scheduling system to book photography sessions.
        </div>
        <div class="custom-project-img-bundler">
          <img src="../assets/Photography.png" class="h-64 rounded-lg relative" />
          <a class="project-link" href="https://github.com/cag185/photography-website"
            >Github Link</a
          >
        </div>
      </div>
    </div>

    <div class="project-container">
      <div class="custom-subtitle pt-10">Wordle Game Solver Python CMD App</div>
      <div class="custom-information-text-container flex flex-row">
        <div class="custom-project-information-text">
          This was a fun little project I created to pass time during Covid-19 in quarentine. I was
          playing a lot of Wordle, and thought to myself this would be easy to create a program to
          do this for me. A few hours later, I had a program that could make use of a dictionary and
          some basic process of elimination to allow the user a pretty good shot of solving the
          Wordle of the day within its maximum 5 guesses. Using Python and the command line, you can
          play the game with Wordle and your computer! A cool expansion to this command line game
          would be to host a site where the user can play this online, with a backend application
          connected. This could remain in python, or I could change the language since it's a pretty
          simple idea, and I could add some creative flair to the front end design to entertain the
          user.
        </div>
        <div class="custom-project-img-bundler">
          <img src="../assets/Wordle.png" class="h-64 rounded-lg relative" />
          <a class="project-link" href="https://github.com/cag185/WordleHelper">Github Link</a>
        </div>
      </div>
    </div>

    <div class="project-container">
      <div class="custom-subtitle pt-10">Simulated Train System Application</div>
      <div class="custom-information-text-container flex flex-row">
        <div class="custom-project-information-text">
          Trains, the bane of existence for a sophomore/junior computer engineer at the University
          Of Pittsburgh. This semester long class was based around a grueling group project where we
          designed and simulated a working train software system. Our professor was a train engineer
          at the local train company in Pittsburgh, and used his full expreience to simualte a
          company wanting to bring on a team to run through the entire design process. In this class
          we learned about the Agile methodology, working in a team, creating deliverables every
          week, managing sprints, and talking directly to the stakeholder (in this case, our
          professor). We learned quickly that often the customer can say they need one thing and in
          reality need something different. Our profressor was intintailly vague about the
          requirements of his product, forcing the development team to dig in and ask questions,
          adopting an iterative design pattern, and creating documents such as a Software
          Development Document that outline deliveriables that shall be met. I was personally
          responsible for creating the Track Model for the system. Some key responsiblilites
          included loading a dynamic user interface to view stats about the various track models
          (elevation, outside temp, switch locations, etc), editing mutable settings to see how the
          enviornment would react, parse CVS information about any track file to be loaded into the
          system, and pass relevant information between modules that other teammates were
          responsible for (including a Track Controller, Train Controller, Train Model, and CTC
          office). The stack used was javascript and typescript as well as electron and eslinter.
        </div>
        <div class="custom-project-img-bundler">
          <img src="../assets/TrainMap.jpg" class="h-64 rounded-lg relative" />
          <a class="project-link" href="https://github.com/ctrlaltf2/trains">Github Link</a>
        </div>
      </div>
    </div>

    <div class="project-container">
      <div class="custom-subtitle pt-10">C++ Multi-level Cache Simulation with Heirarchy</div>
      <div class="custom-information-text-container flex flex-row">
        <div class="custom-project-information-text">
          This project was a combination of a college software project and passion idea that I had.
          I created a react native app that uses Expo Go to host on my local machine and display on
          my iPhone. The app is a bucket-list tracker which displays the country's national parks
          and information about them, allows the user to add to one of two lists: Want-to-visit and
          been-there. The basic app is more or less a todo-list, but with my current full-stack
          knowledge I plan on taking it into a new direction: An outdoor-centric national park
          social media. The app will feature account creation, user posts and the connection between
          user accounts via friending.
        </div>
        <div class="custom-project-img-bundler">
          <img src="../assets/Cache.jpg" class="h-64 rounded-lg relative" />
          <a class="project-link" href="https://github.com/cag185/CacheSimulation">Github Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
