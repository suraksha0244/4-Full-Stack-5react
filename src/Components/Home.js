import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';

const Home = () => {
  return (


    <div className="container mt-5 bg-secondary-subtle">
    <h1 className="mb-4">Home Page</h1>
    <h2 className ="mb-4">Programming Languages</h2>
    <div className="row">
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="card">
          <img src="C:\Users\surak\OneDrive\Desktop\Skill-React-Frontend -First\frontend\src\Components\java.jpg" className="card-img-top" alt="Card 1" />
          <div className="card-body bg-success-subtle">
            <h5 className="card-title">JAVA</h5>
            <p className="card-text"> Java is a robust and widely used programming language that offers a balance between performance and ease of use. It is known for its platform independence, allowing developers to write code once and run it on different operating systems. Java's object-oriented nature enables the creation of modular and reusable code, making it ideal for large-scale projects. 
                    .</p>
                    <div class="card-footer bg-success-subtle">
            <a href="https://www.w3schools.com/java/default.asp" class="btn btn-outline-primary">Read  more</a></div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 mb-4">
        <div className="card">
          <img src="frontend\src\Components\Python-programming-language-feature-image.jpg" className="card-img-top" alt="Card 2" />
          <div className="card-body bg-primary-subtle">
            <h5 className="card-title">PYTHON</h5>
            <p className="card-text"> Python is a versatile and popular programming language known for its simplicity and readability. It emphasizes code readability through the use of indentation and a clean syntax, making it a great choice for beginners. Python's extensive standard library provides a wide range of pre-built modules, allowing developers to accomplish tasks efficiently. 
                    .</p>
                    <div class="card-footer  bg-primary-subtle">
                       
                       <a href="https://www.w3schools.com/python/default.asp" class="btn btn-outline-primary">Read  more</a>
                       
                   </div>
            
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 mb-4">
        <div className="card">
          <img src="frontend\src\Components\c.jpg" className="card-img-top" alt="Card 3" />
          <div className="card-body bg-danger-subtle">
            <h5 className="card-title">C Programming</h5>
            <p className="card-text"></p>
            <p className="card-text">C programming language is a versatile and widely used programming language known for its efficiency and low-level memory manipulation capabilities. It was developed in the early 1970s by Dennis Ritchie at Bell Labs.</p>
            <div class="card-footer  bg-danger-subtle">
                       
                       <a href="https://www.w3schools.com/c/index.php" class="btn btn-outline-primary">Read  more</a>
                       
            
          </div>
           
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 mb-4">
        <div className="card">
          <img src="frontend\src\Components\c++.jpg" className="card-img-top" alt="Card 4" />
          <div className="card-body bg-warning-subtle">
            <h5 className="card-title">C ++ </h5>
            <p className="card-text">C++ is a powerful and popular programming language that extends the capabilities of C while introducing features like classes, objects, and templates for object-oriented programming. Developed by Bjarne Stroustrup in the early 1980ss.</p>
             <div class="card-footer  bg-warning-subtle">
                       
                       <a href="https://www.w3schools.com/cpp/default.asp" class="btn btn-outline-primary">Read  more</a>
                       
                   </div>
          </div>
        </div>
      </div>
    </div>
  </div>




    
  );
};

export default Home;




