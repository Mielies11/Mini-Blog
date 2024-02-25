import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const HomePage = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Emile', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Emile2', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Emile', id: 3 }
    ]);

    const [name, setName] = useState('Emile');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    {/*fetch date, comm with auth services
    fires on every render
    don't change state in here -> infinite loop of renders
    Dependancies: specify when to run the effect
*/}
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]); //dependency array

    
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
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Emile')} title="Emile's Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('New Emile')}>Change Name</button>
            <p>{name}</p>
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