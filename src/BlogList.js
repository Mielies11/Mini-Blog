import {useState} from "react";
const BlogList = ({blogs, title, handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;

    // const [isDropdownVisible, setDropdownVisible] = useState(false);
    // const toggleDropdown = () => {
    //     setDropdownVisible(!isDropdownVisible);
    // };
    //console.log(blogs,props);
    return ( 
      <div className="blog-list">
        <div className="blog-header">
            <h2>{title}</h2>
            <button btnDrop>Filter/Sort</button>
        </div>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick = {() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
        ))}
        </div>
        /* </div>
        <div class="dropdown" id="myDropdown">
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
        </div> */
        /* {isDropdownVisible && (
            <div className="dropdown">
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
            </div>
        )} */
     );
}
 
export default BlogList;