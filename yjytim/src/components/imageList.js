import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from 'react-bootstrap/Button';

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
            <div>
                <Button variant="primary" onClick={() => setToggle(!toggl)}>Primary</Button>{' '}
            </div>
        </div>

    );
  }

  const itemList1 = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
  ];

  const itemList2 = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
  ];