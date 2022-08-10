import React,{useState} from "react";
import {Form, FormGroup, Label,Input, Button }from "reactstrap";
import { useNavigate } from "react-router-dom";



const BlogForm = () => {
    const navigate = useNavigate();
    const [title, setTitle]= useState('');
    const [snippet, setSnippet]= useState('');
    const [featured, setFeatured]= useState(false);
    const [body, setBody]= useState('');
    const [image, setImage]= useState('');
    const [ author, setAuthor] = useState('')
    const [ error, setError] = useState(null)
   
    const handleSubmit = async(e) => {
        e.preventDefault();
        const blog = {
            title,
            author,
            img: image,
            snippet,
            featured,
            body
           }

           const response = await fetch ('/api/blog', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            }
           });
          const json = await response.json();
          if(!response.ok){
            setError(json.error)
         
          }  
          if(response.ok){
            if(response.featured){
                console.log('this is featured')
            }else{
                console.log('not featured')
            }
            setTitle('')
            setAuthor('')
            setImage('')
            setSnippet('')
            setFeatured(false)
            setBody('')
            setError(null)
            console.log('new blog added', json)
            navigate('/', {replace: true})
          }

    }
    return (

        <div className="content container text-white">

            <Form className="flex-column" onSubmit={handleSubmit}>
                <FormGroup className="flex-column">
                    <Label for="Title">
                    Title:
                    </Label>
                    <Input
                    id="Title"
                    name="title"
                    placeholder="Enter Title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />
                </FormGroup>
                <FormGroup className="flex-column">
                    <Label for="Author">
                    Author:
                    </Label>
                    <Input
                    id="Author"
                    name="author"
                    placeholder="Enter Author"
                    type="text"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    />
                </FormGroup>
                <FormGroup  className="flex-column">
                    <Label for="Snippet">
                    Snippet:
                    </Label>
                    <Input
                    id="Snippet"
                    name="snippet"
                    placeholder="Enter Snippet"
                    type="text"
                    onChange={(e) => setSnippet(e.target.value)}
                    value={snippet}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="HeaderImage"style={{marginRight: "1.5em"}}>
                    Image:
                    </Label>
                    <Input
                    id="HeaderImage"
                    name="file"
                    type="file"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    />
                </FormGroup>
                <FormGroup check>
                    <Input 
                    name="featured"
                    type="checkbox" 
                    checked={featured}
                    onChange={(e) => e.target.checked? setFeatured(true):setFeatured(false)}
                    />
                    {' '}
                    <Label check>
                    Featured?
                    </Label>
                </FormGroup>

                <FormGroup  className="flex-column">
                    <Label for="blog-body">
                   Body:
                    </Label>
                    <Input
                    id="blog-body"
                    name="text"
                    type="textarea"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    />
                </FormGroup>
               
                <button type="submit">Publish</button>
                {error && <div>{error}</div>}

            </Form>
          
        </div>
    )

}
export default BlogForm;