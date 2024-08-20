import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Grid from '@mui/joy/Grid';

import Ins_image from './media/image5.JPG'
import alaskaVideo from './media/Alaska.MOV';
import profileImage from '../image/profileImage1.png'

// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons"

import {youtubeUrl, insPhotoUrl} from './../constantsLink.js';


export default function homeCreator() {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12} md={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h4 style={{paddingBottom: "5%"}}>Photographer</h4>
            <Card
            variant="plain"
            sx={{
                minWidth: 300,
                width: '90%',
                bgcolor: 'initial',
                p: 0,
            }}

            >
            <Box sx={{ position: 'relative' }}>
                <AspectRatio ratio="4/3">
                <figure>
                    <img
                    src = { Ins_image }
                    srcSet={ Ins_image }
                    loading="lazy"
                    alt="Alaska by Junyu Yao"
                    />
                </figure>
                </AspectRatio>
                <CardCover
                className="gradient-cover"
                sx={{
                    '&:hover, &:focus-within': {
                    opacity: 1,
                    },
                    opacity: 0,
                    transition: '0.1s ease-in',
                    background:
                    'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                }}
                >
                {/* The first box acts as a container that inherits style from the CardCover */}
                <div>
                    <Box
                    sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: 'flex-end',
                    }}
                    >
                    <FontAwesomeIcon icon={ faInstagram } className="socialMLogo fa-xl icon" style={{color: "#ff2600",}}/>
                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                        <Link
                        href={`${insPhotoUrl}`}
                        overlay
                        underline="none"
                        target="_blank"
                        style = {{
                            color: '#fff',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            display: 'block',
                        }}
                        >
                        Instagram
                        </Link>
                    </Typography>
                    </Box>
                </div>
                </CardCover>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Avatar
                src={profileImage}
                size="sm"
                sx={{ '--Avatar-size': '1.5rem' }}
                />
                <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                Golden Gate Bridge, San Francisco, CA
                </Typography>
            </Box>
            </Card>
        </Grid>
        
        <Grid xs={12} md={6} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h4 style={{paddingBottom: "5%"}}>Film Making</h4>
            <Card
                variant="plain"
                sx={{
                    minWidth: 300,
                    width: '90%',
                    bgcolor: 'initial',
                    p: 0,
                }}
                >
                <Box sx={{ position: 'relative' }}>
                    <AspectRatio ratio="4/3">
                    <figure>
                        <video
                            autoPlay
                            loop
                            muted
                            poster="https://assets.codepen.io/6093409/river.jpg"
                            style={{
                                width: "135%",
                                height: 'auto'
                            }}
                        >
                            <source
                            src= {alaskaVideo}
                            type="video/mp4"
                            />
                        </video>
                    </figure>
                    </AspectRatio>
                    <CardCover
                    className="gradient-cover"
                    sx={{
                        '&:hover, &:focus-within': {
                        opacity: 1,
                        },
                        opacity: 0,
                        transition: '0.1s ease-in',
                        background:
                        'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                    }}
                    >
                    {/* The first box acts as a container that inherits style from the CardCover */}
                    <div>
                        <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            flexGrow: 1,
                            alignSelf: 'flex-end',
                        }}
                        >
                        <FontAwesomeIcon icon={ faYoutube } className="socialMLogo fa-xl icon" style={{color: "#ff2600",}}/>
                        <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                            <Link
                            href={`${youtubeUrl}`}
                            overlay
                            underline="none"
                            target="_blank"
                            style = {{
                                color: '#fff',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                display: 'block',
                            }}
                            >
                            Youtube
                            </Link>
                        </Typography>
                        </Box>
                    </div>
                    </CardCover>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Avatar
                    src={profileImage}
                    size="sm"
                    sx={{ '--Avatar-size': '1.5rem' }}
                    />
                    <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                        Fairbanks, Ak
                    </Typography>
                </Box>
            </Card>
        </Grid>
    </Grid>
  );
}