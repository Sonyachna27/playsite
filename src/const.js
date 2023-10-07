import {ReactComponent as ps} from './images/pc.svg';
import {ReactComponent as ps4} from './images/ps4.svg';
import {ReactComponent as  vr} from './images/vr-glasses.svg';
import {ReactComponent as  desktop} from './images/desktop.svg';
import {ReactComponent as  cube} from './images/3d-cube.svg';
import {ReactComponent as  arrow} from './images/arrow.svg';
 import {ReactComponent as smart} from './images/smartphone.svg';
import {ReactComponent as fire} from './images/fire.svg';
import { ReactComponent as littleBtn } from './images/littleBtn.svg';
 import {ReactComponent as facebook} from './images/facebook.svg';
 import {ReactComponent as instagram} from './images/instagram.svg';
 import {ReactComponent as twitter} from './images/twitter.svg';
 import {ReactComponent as linkedin} from './images/linkedin.svg';
import {ReactComponent as arrow6} from './images/arrow6.svg';
import {ReactComponent as arrow7} from './images/arrow7.svg';
import {ReactComponent as client} from './images/heroicons_sm-user.svg';
import {ReactComponent as nav} from './images/gridicons_location.svg';
import {ReactComponent as list} from './images/bx_bxs-server.svg';
import {ReactComponent as circle} from './images/bx_bxs-check-circle.svg';
import {ReactComponent as stars} from './images/ant-design_star-filled.svg';
import { ReactComponent as ArrowFill } from './images/eva_arrow-back-fill.svg';
import { ReactComponent as ArrowBack } from './images/eva_arrow-back-orange.svg';
import { ReactComponent as search } from './images/search.svg';
import { Link } from 'react-router-dom';
import {ReactComponent as phone} from './images/phone1.svg';
import {ReactComponent as gps} from './images/gps.svg';

export const CircleIcon = circle;
export const Clients = client;
export const Location = nav;
export const Server = list;
export const LittleBtnIcon = littleBtn;
export const  Facebook = facebook;
export const  Instagram = instagram;
export const  Twitter = twitter;
export const  Linkedin = linkedin;
export const fireIcon = fire;
export const smartIcon = smart;
export const psIcon = ps;
export const Ps4Icon = ps4;
export const VrIcon = vr;
export const DesktopIcon = desktop;
export const CubeIcon = cube;
export const ArrowIcon = arrow;
export const ArrowBtn = arrow6;
export const ArrowBtn2 = arrow7;
export const SearchImg = search;
export const userPhoto1 = require ('./images/userPhoto1.png');
export const userPhoto2 = require ('./images/userPhoto2.png');
export const userPhoto3 = require ('./images/userPhoto3.png');
export const Star = stars;
export const VideoImage = require ('./images/VideoImage.jpg');
export const rectangle1 = require('./images/Rectangle23.png');
export const rectangle2 = require ('./images/Rectangle24.png');
export const rectangle3 = require ('./images/Rectangle25.png');
export const rectangle4 = require ('./images/Rectangle26.png');
export const rectangle28 = require ('./images/Rectangle25.jpg');
export const spider = require ('./images/Rectangle4.png');
export const layoutImg = require ('./images/layout_img.png');
export const portfolioImg = require ('./images/Rectangle27.png');
export const Img1 = require ( './images/Rectangle15.png');
export const Img2 = require ( './images/Rectangle16.png');
export const Img3 = require ( './images/Rectangle17.png');
export const Img4 = require ( './images/Rectangle18.png');
export const Img5 = require ( './images/Rectangle19.png');
export const Img6 = require ( './images/Rectangle20.png');
export const Bill = require ('./images/Bill1.jpg');
export const Beverly = require ('./images/Beverly1.jpg');
export const Claudia = require ('./images/Claudia1.jpg');
export const Avatar = require ('./images/Avatar1.jpg');
export const PortfolioPhoto1 = require ('./images/portfolio_photo1.png');
export const PortfolioPhoto2 = require ('./images/portfolio_photo2.png');
export const PortfolioPhoto3 = require ('./images/portfolio_photo3.png');
export const ArrowFillComponent = () => <ArrowFill className='arrowSliders' />;
export const ArrowBackComponent = () => <ArrowBack className='arrowSliders' />;
export const NewsImg1 = require ('./images/NewsImg1.png');
export const NewsImg2 = require ('./images/NewsImg2.png');
export const NewsImg3 = require ('./images/NewsImg3.png');
export const NewsImg4 = require ('./images/NewsImg4.png');
export const NewsImg5 = require ('./images/NewsImg5.png');
export const NewsImg6 = require ('./images/NewsImg6.png');
export const NewsImg7 = require ('./images/NewsImg7.png');
export const NewsImg8 = require ('./images/NewsImg8.png');
export const NewsImg9 = require ('./images/NewsImg9.png');
export const Phone1 = phone;
export const Gps1 = gps;
export const HugeMap = require ('./images/HugeGlobal.png');
export const menuItems = [
    { to: '/playsite/home', label: 'Home' },
    { to: '/playsite/about', label: 'About us' },
    { to: '/playsite/portfolio', label: 'Portfolio' },
    { to: '/playsite/news', label: 'News' },
    { to: '/playsite/contact', label: 'Contact us' },
  ];

export const rectangle = [
    {
      img: rectangle1,
      icon: fireIcon,
      follower: "40 Followers" , 
    },
    {
      img: rectangle2,
      icon: fireIcon,
      follower: "40 Followers" , 
    },
    {
      img: rectangle3,
      icon: fireIcon,
      follower: "40 Followers" , 
    },
    {
      img: rectangle4,
      icon: fireIcon,
      follower: "40 Followers" , 
    },
];

export const devices = [
    {
        vector: smartIcon,
        text: "Mobile Game Development",
    },
    {
        vector: psIcon,
        text: "PC Game Development",
    },
    
    {
        vector: VrIcon,
        text: "PS4 Game Development",
    },
    {
        vector: DesktopIcon,
        text: "AR/VR Solutions",
    },
    {
        vector: CubeIcon,
        text: "AR/ VR design",
    },
    {
        vector: ArrowIcon,
        text: "3D Modelings",
    },

];

export const images = [
    {    img: Img1,},
    {    img: Img2,},
    {    img: Img3,},
    {    img: Img5,},
    {    img: Img4,},   
    {    img: Img6,},
    ];

export const links =[
        {to: '/playsite/about', label: 'About us' },
        {to: '/playsite/zeux', label: 'Zeux' },
        {to: '/playsite/portfolio', label: 'Portfolio'  },
        {to: '/playsite/careers', label: 'Careers' },
        {to: '/playsite/contact', label: 'Contact' },
    ];

 export const social =[
        {to: 'https://www.facebook.com/', icon: Facebook},
        {to: 'https://www.instagram.com/', icon: Instagram },
        {to: 'https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Duk', icon: Twitter },
        {to: 'https://www.linkedin.com/feed/', icon: Linkedin },
    ];
export const swiperImg = [
    {
        imageTitle: 'Game',
        imgUrl: layoutImg,
    },
    {
        imageTitle: 'Game',
        imgUrl: portfolioImg,
    },
    {
        imageTitle: 'Game',
        imgUrl: layoutImg,
    },
    {
        imageTitle: 'Game',
        imgUrl: portfolioImg,
    },
    
]
   export const teamAvatars = [
            { img: Bill,
            name: "John peter",
            position: "COO"  },
            { img: Beverly,
            name: "John peter",
            position: "COO"  },
            { img: Claudia,
            name: "John peter",
            position: "COO"  },
            { img: Avatar,
            name: "John peter",
            position: "COO"  },
   ]
export const PortfolioBlock = [
    {
        img: Clients,
        count: "90+",
        inform: "Clients",

    },
    {
        img: Location,
        count: "30+",
        inform: "Countries",

    },
    {
        img: Server,
        count: "50+",
        inform: "Projects",

    }
]
export const MyListComponent = (props) => {
    return (
      <ul className='video__list'>
        {props.items.map((item, index) => (
          <li className='video__list-item' key={index}>
           <item.icon />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    );
  };
  export const MyComponentBlocks = (props) => {
    return(
        <> 
            {props.items.map((item, index)=>(
                <div className={props.className} key={index}>
                <div className={props.item}>
               <h2>{item.text}</h2>
                <p>{item.content}</p>
                <span>{item.info}</span>
                <button>{item.it}</button>
                </div>
                    <img src={item.img} alt='' />
                </div>
            ))}
            </>
    )
  }
  export const SwiperContent = [
    {
        images: userPhoto1,
        userName: "Viezh Robert",
        userAddress: "Warsaw, Poland",
        mark: "4.5",
        starImg: Star,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

    },
    {
        images: userPhoto2,
        userName: "Yessica Christy",
        userAddress: "Shanxi, China",
        mark: "4.5",
        starImg: Star,
        text: " Lorem Ipsum is simply dummy text of the printing and "

    },
    {
        images: userPhoto3,
        userName: "Kim Young Jou",
        userAddress: "Seoul, South Korea",
        mark: "4.5",
        starImg: Star,
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. "

    },
    {
        images: userPhoto1,
        userName: "Viezh Robert",
        userAddress: "Warsaw, Poland",
        mark: "4.5",
        starImg: Star,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"

    },
    {
        images: userPhoto2,
        userName: "Yessica Christy",
        userAddress: "Shanxi, China",
        mark: "4.5",
        starImg: Star,
        text: " Lorem Ipsum is simply dummy text of the printing and "

    },
    {
        images: userPhoto3,
        userName: "Kim Young Jou",
        userAddress: "Seoul, South Korea",
        mark: "4.5",
        starImg: Star,
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. "

    },

  ]
export const AllNews =[
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        paragraph2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        time: ".5min",
        img: NewsImg1,
        id: 1
    },
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        // paragraph2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        time: ".5min",
        img: NewsImg2,
        id: 2
    },
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        time: ".5min",
        img: NewsImg3,
        id: 3
    },
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        time: ".5min",
        img: NewsImg4,
        id: 4
    },
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        time: ".5min",
        img: NewsImg5,
        id: 5

    },
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        time: ".5min",
        img: NewsImg6,
        id: 6
    },
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        time: ".5min",
        img: NewsImg7,
        id: 7
    },
    {
        title: "Lorem Ipsum is simply dummy text dummy text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        time: ".5min",
        img: NewsImg8,
        id: 8
    },
    {
        title: "Lorem Ipsum is simply dummy text dummy  text ?",
        author: "John smash",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        time: ".5min",
        img: NewsImg9,
        id: 9
    },   
]
export  const SingleNews = ({
    title,
    author,
    paragraph,
    time,
    img,
    paragraph2,
    showParagraph = true, 
    id,
    to
  }) => {
    return (
      <Link to={to} className="single-news" key={id}>
        <div className="news-img">
          <img src={img} alt="News" />
        </div>
        <div className="news-content">
          <h2>{title}</h2>
         <div className='btn-wrap'>
         <button className='author'>{author}</button>
          <span>{time}</span>
         </div>
           <p>{paragraph}</p>
           <p> {paragraph2}</p>
         </div>
      </Link>
    );
  };
 export const NewsList = (props) => {
    const firstTwoNews = AllNews.slice(0, 2);
  const otherNews = AllNews.slice(2); 

    return(
        <div className='allNews-wrapper'>
     {firstTwoNews.map((item)=>(
            <div className='first-news'>
                <div className='news-wrapper'>
                    <div className='news-img bs-img'>
                        <img src={item.img} />
                    </div>
                    <div className='news'>
                    <div className='news__btn-wrap'>
                        <button style={props.color}> {item.author} </button>
                        <span>{item.time}</span>
                    </div>
                    <h2>{item.title}</h2>
                    <p> {item.paragraph}</p>
                    <p> {item.paragraph2}</p>
                    </div>
                </div>
            </div>
        ))}
        {
            otherNews.map((item) =>(
                <div className='other-news'>
                <div className='news'>
                    <div className='news-img ls-img'>
                        <img src={item.img} />
                    </div>
                    <div className='news__btn-wrap'>
                        <button style={props.color}> {item.author} </button>
                        <span>{item.time}</span>
                    </div>
                    <h2>{item.title}</h2>
                    <p> {item.paragraph}</p>
                </div>
            </div>

            ))
        }

        </div>
       
        
    )
 }
