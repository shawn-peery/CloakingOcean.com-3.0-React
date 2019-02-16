import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import 'popper.js/dist/popper.js';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render() {
    return (
        <!-- Breakpoint debugging tool to be filled in with javascript from writeBreakpoint() method-->
        <header class="header" data-id="0">
            <!-- To be filled in with javascript from writeHeader() method-->
        </header>

        <div class="container">
            <div class="row">
                <h1>Welcome to CloakingOcean.com!</h1>
            </div>

            <div class="carousel slide" id="certifications" data-wrap="true" data-ride="carousel">
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img class="img-fluid" src="images/certifications/a_plus_comp_maintenance.png"/>
                    </div><!-- Carousel Item -->

                    <div class="carousel-item">
                        <img class="img-flud" src="images/certifications/comp_programming.png"/>
                    </div><!-- Carousel Item -->

                    <div class="carousel-item">
                        <img class="img-flud" src="images/certifications/information_tech_pathway.png"/>
                    </div><!-- Carousel Item -->

                    <div class="carousel-item">
                        <img class="img-flud" src="images/certifications/network_fundamentals.png"/>
                    </div><!-- Carousel Item -->

                    <div class="carousel-item">
                        <img class="img-flud" src="images/certifications/pc_pro.png"/>
                    </div><!-- Carousel Item -->

                    <!-- Carousel Control Buttons -->
                    <a class="carousel-control-prev" href="#certifications"
                        role="button" data-slide="prev">

                        <span class="carousel-control-prev-icon"
                        aria-hidden="true">
                            <span class="sr-only">Previous</spawn>
                        </span><!-- Carousel Control Prev Icon -->
                    </a><!-- Carousel Control Prev -->

                    <a class="carousel-control-next" href="#certifications"
                        role="button" data-slide="next">

                        <span class="carousel-control-next-icon"
                        aria-hidden="true">
                            <span class="sr-only">Next</spawn>
                        </span><!-- Carousel Control Next Icon -->
                    </a><!-- Carousel Control Next -->
                </div><!-- Carousel Inner -->
            </div> <!-- Carousel: Main Component -->
        </div><!-- Container -->

        <div class="container">
            <div class="row">
                <section class="col-sm-12 col-md-6 col-xl-4">
                    <h2>What is this place?</h2>
                    <p>
                        CloakingOcean.com is my personal, custom coded portfolio website to show off my talents, skills, and hobbies!
                        Cloaking Ocean is what I'm known as throughout the various gaming and programming internet forums I participate in, although my real name is Shawn Whitaker.
                        I'm a 19-year-old programmer enthusiast, and I enjoy a variety of subjects.
                    </p>
                </section><!-- Introduction Section -->

                <section class="col-sm-12 col-md-6 col-xl-4">
                    <h2>1. Java</h2>
                    <p>
                        Firstly, Java is my favorite programming language as well as the one I'm most experienced with. What initially started out as ambitions of creating Minecraft server
                        mods resulted in a concise understanding of general programming concepts such as loops, operators, and object-oriented programming.
                    </p>
                </section><!-- Java Section -->

                <section class="col-sm-12 col-md-6 col-xl-4">
                    <h2>2. Unity</h2>
                    <p>
                        With this new knowledge and confidence in being able to understand and use something so complex as a programming language, I continued my endeavors to learn what other types of programming
                        languages existed. Being an avid gamer, I was excited to try my new programming skills to create a game of my own. This led me to join Spy Hop and use Unity's game engine to create whatever
                        I could imagine (and what time allowed).
                    </p>
                </section><!-- Unity Section -->

                <section class="col-sm-12 col-md-6 col-xl-4">
                    <h2>3. Web</h2>
                    <p>
                        I later realized that web development is a huge industry and if I could learn more about it, my chances of employment
                        would increase! I started learning what I could about HTML, CSS, and Javascript. These technologies, when I was first starting,
                        seemed very daunting and confusing. How did these different parts create a webpage? I'll admit even as I write this webpage, the various
                        libraries and frameworks that increase a programmer's speed and accuracy are amazing, but also very overwhelming. However, we learn
                        step by step. And that's how I plan to tackle web development. It'll take time, but I believe it'll be worth it!
                    </p>
                </section><!-- Web Section -->

                <section class="col-sm-12 col-md-6 col-xl-4">
                    <h2>4. Gaming</h2>
                    <p>
                        Ever since I was young, I had a controller in my hand. Whether it was near the beginning of my life when I was "helping" my brother with his single player game, or even today
                        as I mash my keyboard trying to climb the ranked ladder of League of Legends, it's always been a part of my life. It's what encouraged me during my programming lessons to pay
                        attention and continue even when I mess up. It's been a friend I can turn to when I just need to rest my mind.
                    </p>
                </section><!-- Gaming Section -->

                <section class="col-sm-12 col-md-6 col-xl-4">
                    <h2>5. Music</h2>
                    <p>
                        In the evening of my old elementary school days, I would practice the piano either at the school with a group of other students or with my grandmother. I'm deeply grateful my
                        grandmother continued to push me to learn the piano. It's a fantastic ability to be able to sit down at a piano and make music. When you perform a song you've been working to
                        perfect for months, it feels like it's your song and it's your words you're playing with pure intention.
                    </p>
                </section><!-- Music Section -->
            </div><!-- row -->
        </div><!-- Container -->
    );
  }
}

export default Home;
