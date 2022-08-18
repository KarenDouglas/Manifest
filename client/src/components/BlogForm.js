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
    const [ author, setAuthor] = useState('');
    const [ error, setError] = useState(null);
    const [fileName, setFileName] = useState('');

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    }
   
    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("snippet", snippet);
        formData.append("featured", featured);
        formData.append("author", author);
        formData.append("img", fileName);
        formData.append("body", body);



        // const blog = {
        //     title,
        //     author,
        //     img: image,
        //     snippet,
        //     featured,
        //     body
        //    }

           const response = await fetch ('http://localhost:4000/api/blog', {
            method: 'POST',
            body: JSON.stringify(formData),
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

            <Form className="flex-column" onSubmit={handleSubmit} encType="multipart/form-data">
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
                    <Label htmlFor="file" for="HeaderImage"style={{marginRight: "1.5em"}}>
                    Upload Image:
                    </Label>
                    <Input
                    id="HeaderImage"
                    name="file"
                    type="file"
                    fileName="img"
                    onChange={onChangeFile}
                  
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