import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from 'react-bootstrap/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// css
import './css/imageList.css';
import '../css/style.css';

export default function MasonryImageList() {
    const [toggl, setToggle ] = React.useState(false)

    return (
        <div className='imageList'>
            <Box sx={{ }}>
                <ImageList variant="woven" cols={3} gap={8}>
                    {itemList1.map((item) => (
                        <ImageListItem key={item.img}>
                        
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            className="images"
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}

                    {itemList2.map((item2) => (
                        <ImageListItem key={item2.img}>
                        {toggl &&(
                        <img
                            src={`${item2.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item2.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item2.title}
                            className="images"
                            loading="lazy"
                        />
                        )}
                        </ImageListItem>
                    ))}                        

                </ImageList>
            </Box>
            <div 
            style={{display: "flex",
              justifyContent: "center",
              alignContent: "center",}}>
                <Button 
                variant="primary" 
                onClick={() => setToggle(!toggl)}
                style={{backgroundColor:"transparent", border:'none'}}
                className="miamiBlue">
                  <KeyboardDoubleArrowDownIcon/>
                  <div>
                          More
                  </div>
                  </Button>{' '}
            </div>
        </div>

    );
  }

  const itemList1 = [
    {
      img: require('./image/image1.JPG'),
      title: 'Kitchen',
    },
    {
      img: require('./image/image2.JPG'),
      title: 'Kitchen',
    },
    {
      img: require('./image/image3.JPG'),
      title: 'Sink',
    },
    {
      img: require('./image/image4.JPG'),
      title: 'Books',
    },
    {
      img: require('./image/image5.JPG'),
      title: 'Chairs',
    },
    {
      img: require('./image/image6.JPG'),
      title: 'Chairs',
    },
  ];

  const itemList2 = [
    {
      img: require('./image/image7.JPG'),
      title: 'Chairs',
    },
    {
      img: require('./image/image8.JPG'),
      title: 'Chairs',
    },
    {
      img: require('./image/image9.JPG'),
      title: 'Chairs',
    },
  ];