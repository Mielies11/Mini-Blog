import { useState } from "react";
import BlogList from "./BlogList";

const HomePage = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'Emile', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Emile2', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Emile', id: 3}
    ]);

    
    // const [name, setName] = useState('Emile');
    // const [age, setAge] = useState(22);
    // const handleClick = () => {
    //     //console.log('button clicked');
    //     setName('new Emile');
    //     setAge(age + 1)
    // }

    // const handleClickAgain = (name) => {
    //     console.log('hello ' + name);
    // }
    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === 'Emile')} title="Emile's Blogs"/>
        {/* {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>  
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </div>
            ))} */}
        </div>
            /* <h2>Homepage</h2>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick}>It's your birthday</button>
            { <button onClick = {() => {
                handleClickAgain('Emile')
            }}>More Dynamic Click</button>} */
        
    );
}
 
export default HomePage;