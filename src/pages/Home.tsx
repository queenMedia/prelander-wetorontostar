/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Modal } from "@components";
import "@stylesPages/Home.scss";

import Logos from "@images/logos.png";
import Elon1 from "@images/elon1.jpg";
import Elon2 from "@images/elon2.jpg";
import Elon3 from "@images/elon3.jpg";
import Elon4 from "@images/elon4.jpg";
import Avatar1 from "@images/avatar1.jpg";
import Avatar2 from "@images/avatar2.jpg";
import Avatar3 from "@images/avatar3.jpg";
import Avatar4 from "@images/avatar4.jpg";
import Avatar5 from "@images/avatar5.jpg";
import Avatar6 from "@images/avatar6.jpg";
import Avatar7 from "@images/avatar7.jpg";
import Avatar8 from "@images/avatar8.jpg";
import Avatar10 from "@images/avatar10.jpg";
import Avatar11 from "@images/avatar11.jpg";
import Avatar12 from "@images/avatar12.jpg";
import Avatar13 from "@images/avatar13.jpg";
import Avatar14 from "@images/avatar14.jpg";
import Avatar15 from "@images/avatar15.jpg";
import Avatar16 from "@images/avatar16.jpg";
import Avatar18 from "@images/avatar18.jpg";
import Avatar19 from "@images/avatar19.jpg";
import Avatar20 from "@images/avatar20.jpg";
import Avatar21 from "@images/avatar21.jpg";
import Avatar22 from "@images/avatar22.jpg";
import Avatar23 from "@images/avatar23.jpg";
import Avatar24 from "@images/avatar24.jpg";
import AvatarB from "@images/avatarB.jpg";

import Checkmark from "@images/checkmark.png";
import ADS from "@images/ads1.jpg";
import Aside1 from "@images/aside1.png";
import Aside2 from "@images/aside2.png";
import Aside3 from "@images/aside3.png";
import Aside4 from "@images/aside4.png";
import Aside5 from "@images/aside5.png";
import Aside6 from "@images/aside6.png";
import Aside7 from "@images/aside7.png";
import Aside8 from "@images/aside8.png";
import Aside9 from "@images/aside9.jpg";
import Aside10 from "@images/aside10.jpg";

import imgModal from "@images/pop.png";
import ArrowDown from "@icons/arrow-down.png";

interface ArrayAvatar {
  name: string;
  avatar: string;
  text: string;
  reply: string;
  like: string;
  timeAgo: string;
  comentReply?: any | null | [];
}

const avatars: Array<ArrayAvatar> = [
  {
    name: "Tohloria Lewis",
    avatar: Avatar1,
    text: "I've been trading with for the last few weeks and made a small profit of $2,300. I'm loving it!",
    reply: "Reply. ",
    like: "6 . Like .",
    timeAgo: "13 minutes ago",
    comentReply: []
  },
  {
    name: "Tanya Porquez",
    avatar: Avatar2,
    text: "I saw it on the show and signed up yesterday, I'm up around $25.",
    reply: "Reply. ",
    like: "6 . Like .",
    timeAgo: "13 minutes ago",
    comentReply: []
  },
  {
    name: "Jennifer Jackson Mercer",
    avatar: Avatar3,
    text: "A friend of mine used it and recommended it, I'll look into it. ",
    reply: "Reply. ",
    like: "19 . Like .",
    timeAgo: "25 minutes ago",
    comentReply: [
      {
        name: "Michael Cash",
        avatar: AvatarB,
        text: "It is giving me a better return on investment than my stock portfolio!",
        reply: "Reply. ",
        like: "19 . Like .",
        timeAgo: "46 minutes ago"
      }
    ]
  },
  {
    name: "David Barrott",
    avatar: Avatar4,
    text: "It is so easy to use, you just deposit money and the robot does all the work for you.",
    reply: "Reply. ",
    like: "43 . Like .",
    timeAgo: "about an hour ago",
    comentReply: []
  },
  {
    name: "Amanda Gibson",
    avatar: Avatar5,
    text: "I saw this on the news. Thank you for sharing this article!",
    reply: "Reply. ",
    like: "3 . Like .",
    timeAgo: "1 hour ago",
    comentReply: []
  },
  {
    name: "Julie Keyse",
    avatar: Avatar6,
    text: "I've heard so much about bitcoin and everybody was using it, I'm going to give this a try!",
    reply: "Reply. ",
    like: "Like .",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Peter Williams",
    avatar: Avatar7,
    text: "I've made over $1,430 after just a week, I'm so close to leaving my job and doing this full time.",
    reply: "Reply. ",
    like: "12 . Like .",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Kirsten Bauman Riley",
    avatar: Avatar8,
    text: "I bought my first bitcoin yesterday and I'm really excited to see what this can do for me over the coming days.",
    reply: "Reply. ",
    like: "30 . Like .",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Celia Kilgard",
    avatar: Avatar10,
    text: "worked for me! It worked just like I thought it would. It was easy enough and I just want others to know when something works.",
    reply: "Reply. ",
    like: "53 . Like .",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Alanna 'martin' Payne",
    avatar: Avatar11,
    text: "Thanks for the info, just started using the platform.",
    reply: "Reply. ",
    like: "16 . Like .",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Logan Chang",
    avatar: Avatar12,
    text: "Been so busy with my kids lately, but this fits in just fine. I've traded up around $190 in 4 days. It's small, but a really good start!",
    reply: "Reply. ",
    like: "2 . Like .",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Mark Fadlevich",
    avatar: Avatar13,
    text: "I've been so impressed by this, I've deposited over $500 into my account so far and made back more than 4 times that amount.",
    reply: "Reply. ",
    like: "11 . Like .",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Ashley O'Brien Berlin",
    avatar: Avatar14,
    text: "Really easy to use and really fast. I'm not really a technical person, but I got the hang of this easy. It has made me around $130 after just a day!!",
    reply: "Reply. ",
    like: "33 . Like . ",
    timeAgo: "2 hours ago",
    comentReply: []
  },
  {
    name: "Amanda Hickam",
    avatar: Avatar15,
    text: "Just signed up, wish me luck people.",
    reply: "Reply. ",
    like: "23 . Like .",
    timeAgo: "3 hours ago",
    comentReply: []
  },
  {
    name: "Jonathan Jackson",
    avatar: Avatar16,
    text: "My friend just e-mailed me this, a friend at work had told her about it. i guess it works really well",
    reply: "Reply. ",
    like: "6 . Like .",
    timeAgo: "3 hours ago",
    comentReply: []
  },
  {
    name: "Dean Phongsa",
    avatar: Avatar18,
    text: "Wasn't sure about signing up, but I am so glad I did. I've made like $89 after just 2 hours on the platform. Really easy and really fast, nothing could be simplier",
    reply: "Reply. ",
    like: "17 . Like .",
    timeAgo: "4 hours ago",
    comentReply: []
  },
  {
    name: "Molly Murley Davis",
    avatar: Avatar19,
    text: "I've gone ahead and made my initial deposit. I can't wait to get started and see what happens.",
    reply: "Reply. ",
    like: "8 . Like .",
    timeAgo: "6 hours ago",
    comentReply: []
  },
  {
    name: "Jenna Ponchot Bush",
    avatar: Avatar20,
    text: "This would have to be the easiest way to invest in bitcoin ever, even I was able to do it with virtually no previous experience in the area.",
    reply: "Reply. ",
    like: "20 . Like .",
    timeAgo: "8 hours ago",
    comentReply: []
  },
  {
    name: "Kyle Miranda",
    avatar: Avatar21,
    text: "I have tried so much of this kind of stuff, in one sense I want to try it but in the back of my mind I am thinking, yeah right!! Someone please reassure me it works.",
    reply: "Reply. ",
    like: "10 . Like .",
    timeAgo: "8 hours ago",
    comentReply: []
  },
  {
    name: "Tom Bergheger",
    avatar: Avatar22,
    text: "I tried the platform thing a while ago and it worked pretty good for me.",
    reply: "Reply. ",
    like: "13 . Like .",
    timeAgo: "8 hours ago",
    comentReply: []
  },
  {
    name: "Eitan Silver",
    avatar: Avatar23,
    text: "A few of my friends had invested in bitcoin and made an absolute killing do it, I'm going to be joining them soon.",
    reply: "Reply. ",
    like: "3 . Like .",
    timeAgo: "8 hours ago",
    comentReply: []
  },
  {
    name: "Gotmy Mindframe Right",
    avatar: Avatar24,
    text: "Had no idea you could get results like this, does anybody know if you can invest in other crypto currencies.",
    reply: "Reply. ",
    like: "5 . Like .",
    timeAgo: "9 hours ago",
    comentReply: []
  }
];

const PopUp = () => (
  <div className="home__popup">
    <img src={imgModal} alt="" className="home__popup-img" />
    <button type="button" className="home__popup-action">
      Start Now
    </button>
  </div>
);

export default function Home() {
  const { modal, toggleModal }: any = useOutletContext();

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      toggleModal(true);
    }, 2000);
  }, []);

  return (
    <>
      <Modal
        open={modal}
        onClose={toggleModal}
        config={{
          close: true
        }}
      >
        {() => <PopUp />}
      </Modal>
      ;
      <main className="home">
        <article className="home__content-text">
          <h1 className="home__title">
            <span>SPECIAL REPORT</span>
            :
            {" "}
            Elon Musk's latest investment has the government and big banks
            terrified.
          </h1>
          <p className="home__text home__text--description">
            Indian citizens are already raking in millions of dollars from home
            using this "wealth loophole" - but will it make them leave the
            office at the end of this month?
          </p>
          <img src={Logos} alt="" className="home__img-logos" />
          <section className="home__section">
            <div className="home__picture">
              <img src={Elon1} alt="" className="home__img-section" />
              <p className="home__img-title">
                Elon Musk comes out with a scandalous secret investment that's
                making hundreds of people in Canada very rich
              </p>
            </div>
            <p className="home__text">
              The founder of Tesla, SpaceX, and now the richest man in the world
              Elon Musk recommended a revolutionary trading system to his
              followers through a simple and straightforward announcement.
            </p>
            <p className="home__text">
              Tech entrepreneur, known as widely for slinging cars into the
              sun's orbit as for criticizing Covid-19 safety measures, has made
              a name for himself as an outspoken talker who doesn’t mind being
              honest about how he makes his money.
            </p>
            <p className="home__text">
              Lately, he appeared on The Marilyn Denis Show and announced a new
              "wealth loophole" which he says can transform anyone into a
              millionaire within 3-4 months. Musk urged everyone in Canada to
              jump into this amazing opportunity before the big banks shut it
              down for good.
            </p>
            <p className="home__text">
              And sure enough, minutes after the interview was over,
              Toronto-Dominion Bank called to stop Musk's interview from being
              aired - it was already too late.
            </p>
            <h3 className="home__title home__title--section">
              HERE'S EXACTLY WHAT HAPPENED:
            </h3>
            <p className="home__text">
              The talk-show host Marilyn Denis invited Musk on the show to share
              any tips he had on building wealth and billionaire entrepreneur
              dropped a bomb:
            </p>
            <div className="home__content-link">
              <span className="home__text">
                "What's made me successful is jumping into new opportunities
                quickly - without any hesitation. And right now, my number one
                money-maker is a new
              </span>
              {" "}
              <a href="./" className="home__text home__link-a">
                cryptocurrency auto-trading program called Bitcoin Code.
              </a>
              {" "}
              <span className="home__text">
                seen in my entire lifetime to build a small fortune fast. I urge
                everyone to check this out before the banks shut it down."
              </span>
            </div>
            <p className="home__text">
              Marilyn Denis was left in disbelief as Musk pulled out his phone
              and showed viewers how much money he's making through this new
              money-making program that now has everyone in Canada whispering.
            </p>
          </section>
          <section className="home__section">
            <div className="home__picture">
              <img src={Elon2} alt="" className="home__img-section" />
              <p className="home__text">
                The segment ran out of time before Musk could elaborate, so we
                got an exclusive interview with the man himself to learn more
                about this controversial opportunity.
              </p>
            </div>
            <div className="home__content-button">
              <button type="button" className="home__button-action">
                Get Started now
              </button>
            </div>
            <h3 className="home__title home__title--section">
              EXCLUSIVE INTERVIEW WITH ELON MUSK
            </h3>
            <div className="home__content-link">
              <span className="home__text">
                "You may have heard about this new cryptocurrency investment
                platform called
              </span>
              {" "}
              <a href="./" className="home__text home__link-a">
                Bitcoin Code
              </a>
              {" "}
              <span className="home__text">
                that’s helping regular people in Canada, Asia and Europe build
                fortunes overnight. You may be skeptical because it sounds too
                good to be true."
              </span>
            </div>
            <p className="home__text">Musk continues:</p>
            <p className="home__text">
              “I get that because I thought the same thing when a trusted friend
              told me about it. But after seeing with my own eyes how much money
              he was making, I had to try it for myself.
            </p>
            <p className="home__text">
              I'm glad I tried it because it was some of the biggest and easiest
              money I've ever made. I'm talking tens of thousands of dollars a
              day on autopilot. It’s literally the fastest way to make a
              windfall of cash right now. And it’s not going to last for much
              longer when more and more people find out about it. Or when banks
              shut it down for good.”
            </p>
          </section>
          <section className="home__section">
            <div className="home__picture">
              <img src={Elon3} alt="" className="home__img-section" />
            </div>
            <h3 className="home__title home__title--section">
              WHAT EXACTLY IS BITCOIN CODE AND HOW DOES IT WORK?
            </h3>
            <div className="home__content-link">
              <span className="home__text">The idea behind</span>
              {" "}
              <a href="./" className="home__text home__link-a">
                Bitcoin Code
              </a>
              {" "}
              <span className="home__text">
                is straightforward: To allow the average person to cash in on
                the cryptocurrency boom which is still the most lucrative
                investment of the 21st century, despite what most people think.
              </span>
            </div>
            <p className="home__text">
              Although Bitcoin price has dropped from its all time high of
              $20,000 per Bitcoin, traders are still making a killing. Why?
              Because there are thousands of other cryptocurrencies besides
              Bitcoin that being traded for huge profits on a daily basis.
            </p>
            <p className="home__text">
              Some of these cryptocurrencies include Ripple, Ethereum, Monero,
              Zcash and they are still making returns of over 10,000% and higher
              for ordinary people in Canada.
            </p>
            <div className="home__content-link">
              <a href="./" className="home__text home__link-a">
                Bitcoin Code
              </a>
              {" "}
              <span className="home__text">
                lets you profit from all of these cryptocurrencies, even in a
                bear market. It uses artificial intelligence (AI) to
                automatically handle long and short selling for you so you can
                make money around the clock, even while you sleep.
              </span>
            </div>
            <h3 className="home__title home__title--section">
              THE LUCRATIVE MONEY-MAKING SECRET BIG BANKS DON'T WANT YOU TO KNOW
            </h3>

            <p className="home__text">Elon Musk goes on,</p>
            <div className="home__content-link">
              <span className="home__text">
                "We're seeing hard economic times, and this is the solution
                people have been waiting for. Never in history have we had such
                an
              </span>
              {" "}
              <a href="./" className="home__text home__link-a">
                amazing opportunity
              </a>
              {" "}
              <span className="home__text">
                that ordinary people can easily take advantage of to generate
                tremendous wealth in such a short time.
              </span>
            </div>
            <div className="home__content-link">
              <span className="home__text">
                Some people are hesitant to try this because it’s so different.
                And that’s because the big banks are trying to cover this up!
                The big banks are actively creating propaganda and calling
                cryptocurrencies and platform like
              </span>
              {" "}
              <a href="./" className="home__text home__link-a">
                Bitcoin Code
              </a>
              {" "}
              <span className="home__text">
                a scam. Why? They are worried their corporate profits will
                shrink once their customers know how to create massive wealth
                themselves.
              </span>
            </div>
            <p className="home__text">
              The truth is, cryptocurrency is the revolution of our lifetime and
              anyone who does not jump on this opportunity is missing out. I’ve
              already received angry calls and threats from big financial
              corporations because I bring this technology to people’s
              attention. But screw them. People in Canada are already starting
              to know the truth and it’s only a matter of time before more and
              more do.
            </p>
            <div className="home__content-link">
              <span className="home__text">
                I'm sharing this because I've also received hundreds of emails
                from people thanking me for sharing this secret. My favorite one
                is from a young man who bought his little brother his dream car
                - a Ferrari 488 Pista using the cash he made from
              </span>
              {" "}
              <a href="./" className="home__text home__link-a">
                Bitcoin Code.
              </a>
              {" "}
              <span className="home__text">
                This platform is truly making the lives of everyone in the world
                a little better.”
              </span>
            </div>
          </section>
          <section className="home__section">
            <div className="home__picture home__picture--center">
              <img src={Elon4} alt="" className="home__img-section" />
              <p className="home__img-title">
                Steven Baker used the profits he earned from Bitcoin Code to buy
                his little brother his dream car. What an inspiring way to use
                wealth for good!
              </p>
            </div>
            <h3 className="home__title home__title--section">
              DOES BITCOIN CODE REALLY WORK? WE TEST IT OURSELVES OUT
            </h3>
            <div className="home__content-link">
              <span className="home__text">
                Our senior editors wouldn't allow us to publish the interview
                with Elon Musk until we verified that
              </span>
              {" "}
              <a href="./" className="home__text home__link-a">
                Bitcoin Code
              </a>
              {" "}
              <span className="home__text">
                is a legitimate make-money-from-home opportunity. Our corporate
                leadership did not want us releasing any information that could
                potentially cause citizens of Canada to lose their hard-earned
                money.
              </span>
            </div>
            <div className="home__content-link">
              <span className="home__text">So our editorial team tested</span>
              {" "}
              <a href="./" className="home__text home__link-a">
                Bitcoin Code
              </a>
              {" "}
              <span className="home__text">
                to make sure it actually works like Elon described. One of our
                online editors, Zachary Tisdall, volunteered to risk his own
                money and test out
              </span>
              {" "}
              <a href="./" className="home__text home__link-a">
                Bitcoin Code
              </a>
            </div>
            <div className="home__content-button">
              <button
                type="button"
                className="home__button-action home__button-action--bottom"
              >
                READ THE ENTIRE ARTICLE
                <span>
                  <img src={ArrowDown} alt="" className="home__img-arrow" />
                </span>
              </button>
            </div>
          </section>
          <div className="home__coments">
            <div className="home__commets-top">
              <p className="home__coments-recent">Recent # Comments</p>
              <p className="home__coments-recent home__coments-recent--add">
                Add a comment
              </p>
            </div>
            <section className="home__coments-content">
              {avatars.map((avatar, index) => (
                <div className="home__coments-box" key={avatar.name}>
                  <img
                    src={avatar.avatar}
                    alt=""
                    className="home__coments-avatar"
                  />
                  <div className="home__coment-box">
                    <p className="home__coment-name">{avatar.name}</p>
                    <p className="home__coment-text">{avatar.text}</p>
                    <div className="home__content_reply">
                      <div className="home__coment-reply">
                        <span className="home__reply">{avatar.reply}</span>
                        <span className="home__like">{avatar.like}</span>
                        <span className="home__time-ago">{avatar.timeAgo}</span>
                      </div>
                      <div className="home__reply-bottom"></div>
                      {avatar.comentReply.map((reply: any, i: number) => (
                        <div className="home__coments-box" key={reply.name}>
                          <img
                            src={reply.avatar}
                            alt=""
                            className="home__coments-avatar"
                          />
                          <div className="home__coment-box">
                            <p className="home__coment-name">{reply.name}</p>
                            <p className="home__coment-text">{reply.text}</p>
                            <div className="home__coment-reply">
                              <span className="home__reply">{reply.reply}</span>
                              <span className="home__like">{reply.like}</span>
                              <span className="home__time-ago">
                                {reply.timeAgo}
                              </span>
                            </div>
                            <div className="home__reply-bottom"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </article>
        <aside className="home__aside home__aside-movil">
          <div className="home__aside-content">
            <img
              src={ADS}
              alt=""
              className="home__img-aside home__img-aside--ads"
            />
            <h4 className="home__title home__title-aside">READER RESULTS</h4>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside">PROFIT: $5,552</h4>
            <img src={Aside1} alt="" className="home__img-aside" />
            <div className="home__aside-link">
              <span className="home__text-aside">"I've been using</span>
              <a className="home__aside-link-a" href="./">
                Bitcoin Code
              </a>
              <span className="home__text-aside">
                for just over 2 weeks, I've taken my initial deposit from $400
                to $5,952. That is far more than I make at work."
              </span>
            </div>
            <p className="home__text-aside-bottom">
              Kyle McLennan
              <br></br>
              Calgary, Canada
            </p>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside">PROFIT: $9,284</h4>
            <img src={Aside2} alt="" className="home__img-aside" />
            <div className="home__aside-link">
              <span className="home__text-aside">
                "I've hit over $9,200 in profit after just a month of using
              </span>
              <a className="home__aside-link-a" href="./">
                Bitcoin Code.
              </a>
              <span className="home__text-aside">
                Because I can use it on my laptop, I've been travelling around
                Canada and making money the whole time!"
              </span>
            </div>
            <p className="home__text-aside-bottom">
              Sean Black
              <br></br>
              Toronto, Canada
            </p>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside">PROFIT: $22,219</h4>
            <img src={Aside3} alt="" className="home__img-aside" />
            <div className="home__aside-link">
              <span className="home__text-aside">
                "It's so damn easy to use, even for me! I've never traded
                before, but I'm making $3,000+ a week and loving life!"
              </span>
            </div>
            <p className="home__text-aside-bottom">
              Lydia Bartlett
              <br></br>
              Montreal, Canada
            </p>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside">PROFIT: $41,943</h4>
            <img src={Aside4} alt="" className="home__img-aside" />
            <div className="home__aside-link">
              <span className="home__text-aside">
                "I've been able to finally quit my job, thanks entirely to
              </span>
              <a className="home__aside-link-a" href="./">
                Bitcoin Code.
              </a>
              <span className="home__text-aside">
                I've made so much, so easily!"
              </span>
            </div>
            <p className="home__text-aside-bottom">
              Matthew Stephens
              <br></br>
              TVictoria, Canada
            </p>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside">PROFIT: $7,521</h4>
            <img src={Aside5} alt="" className="home__img-aside" />
            <div className="home__aside-link">
              <span className="home__text-aside">
                "I've only been using the
              </span>
              <a className="home__aside-link-a" href="./">
                Bitcoin Code.
              </a>
              <span className="home__text-aside">
                for 2 weeks and it has already helped me save a substantial
                amount for my future European holiday."
              </span>
            </div>
            <p className="home__text-aside-bottom">
              Maya Ryan
              <br></br>
              Hamilton, Canada
            </p>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside">PROFIT: $58,744</h4>
            <img src={Aside6} alt="" className="home__img-aside" />
            <div className="home__aside-link">
              <span className="home__text-aside">
                "I teamed up with my best friends and together we've hit the
                jackpot after just 3 weeks. The trading robot does all the work
                for you. Together we've made over $17,000 a week"
              </span>
            </div>
            <p className="home__text-aside-bottom">
              Leon Gould & William Moore
              <br></br>
              Windsor, Canada
            </p>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside">PROFIT: $12,301</h4>
            <img src={Aside7} alt="" className="home__img-aside" />
            <div className="home__aside-link">
              <span className="home__text-aside">
                "My Boyfriend was the one who told me about
              </span>
              <a className="home__aside-link-a" href="./">
                Bitcoin Code.
              </a>
              <span className="home__text-aside">
                and it has changed my live. I've been making over $2,000 a week
                for over a month, with less than 30 minutes of work a day"
              </span>
            </div>
            <p className="home__text-aside-bottom">
              Alexandra Patterson
              <br></br>
              Edmonton, Canada
            </p>
          </div>
          <div className="home__aside-content">
            <h4 className="home__title home__title-aside home__title-aside--check">
              Follow the 3 Simple Steps To Get Started:
            </h4>
            <div className="home__aside-check-img">
              <div className="home__aside-check-content">
                <img src={Checkmark} alt="" className="home__aside-Checkmark" />
                <div className="home__text-check"> Step 1:</div>
              </div>
              <a href="./" className="home__title-check">
                Sign up for your free account
              </a>
              <img
                src={Aside8}
                alt=""
                className="home__img-aside home__img-aside--steps"
              />
            </div>
          </div>
          <div className="home__aside-content">
            <div className="home__aside-check-img">
              <div className="home__aside-check-content">
                <img src={Checkmark} alt="" className="home__aside-Checkmark" />
                <div className="home__text-check"> Step 2:</div>
              </div>
              <a href="./" className="home__title-check">
                Deposit the minimum of $400
              </a>
              <img
                src={Aside9}
                alt=""
                className="home__img-aside home__img-aside--steps"
              />
            </div>
          </div>
          <div className="home__aside-content">
            <div className="home__aside-check-img">
              <div className="home__aside-check-content">
                <img src={Checkmark} alt="" className="home__aside-Checkmark" />
                <div className="home__text-check"> Step 3:</div>
              </div>
              <a href="./" className="home__title-check">
                Withdraw profits to your bank!
              </a>
              <img
                src={Aside10}
                alt=""
                className="home__img-aside home__img-aside--steps"
              />
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
