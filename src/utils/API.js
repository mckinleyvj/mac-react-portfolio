import axios from 'axios';

const { REACT_APP_BASEURL } = process.env;

const githubapi = (user) => axios.get(`${REACT_APP_BASEURL}${user}/repos?sort=created&per_page=6`);

export default githubapi;
