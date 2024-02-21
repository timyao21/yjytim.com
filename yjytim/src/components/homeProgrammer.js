import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// css
import './css/homeProgrammer.css';
import '../css/style.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 450 }}
      className="backgroundcolor1"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        style={{minWidth:"20%"}}
      >
        <Tab className="textColor1" label="Python" {...a11yProps(0)}/>
        <Tab className="textColor1" label="Web Design" {...a11yProps(1)} />
        <Tab className="textColor1" label="Java" {...a11yProps(2)} />
        <Tab className="textColor1" label="Database" {...a11yProps(3)} />
        <Tab className="textColor1" label="C++" {...a11yProps(4)} />
        <Tab className="textColor1" label="Mobile Apps" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div style={{width:"100%"}}>
          Python is a versatile and powerful programming language that has a wide range of applications in different industries. As a skilled Python developer, I have honed my expertise in this language and have developed a strong understanding of its various libraries, frameworks, and tools.
          I specialize in developing web crawlers, handling different types of data, and visualizing them to provide insights that drive business decisions. In addition, I have experience in developing inventory management software, which I did as part of my undergraduate capstone project.
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{width:"100%"}}>
          I am a skilled web designer with experience in creating beautiful and functional websites. I specialize in using the React framework to design and develop modern, responsive, and user-friendly websites that meet the needs of my clients. In addition, I have worked on several web design projects, including designing and developing the official website for the NYU Tandon Chinese Students and Scholars Association (CSSA). My approach to web design is based on understanding the unique needs and goals of my clients and translating them into an engaging and visually appealing website.
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{width:"100%"}}>
          My experience includes developing an Inventory Management Software that enhanced operational efficiencies, showcasing my ability to solve complex problems using Java. 
          My technical toolkit also features Python, JavaScript, and SQL, enabling versatile software development.
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div style={{width:"100%"}}>
          Educated in Computer Science with a minor in Information Systems at Washington College, I've mastered database systems, employing SQL, MySQL, and Tableau to drive projects towards peak efficiency and performance. 
          My work ranges from analytical studies using Python and SQL to boosting web SEO and engagement through database optimization. 
          I'm driven by the challenge of extending data's potential, striving to surpass expectations with every solution.
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div style={{width:"100%"}}>
          My journey in programming began with C++ during high school, laying the groundwork for a passion in technology that has only grown. 
          This foundation has not only taught me the importance of efficiency and maintainability in code but also enabled me to quickly adapt to and excel in various technologies. 
          Dive into my projects to see how a strong start with C++ has propelled my professional development.
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div style={{width:"100%"}}>
          Mobile Apps
        </div>
      </TabPanel>
    </Box>
  );
}