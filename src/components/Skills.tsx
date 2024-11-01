import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPython, FaJava, FaJsSquare, FaNodeJs, FaDatabase, FaCogs } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    { title: "VR", icon: <FaCogs />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Machine Learning, Artificial Intelligence", icon: <FaCogs />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Java", icon: <FaJava />, description: "Experience in x and y and z and a and This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Python", icon: <FaPython />, description: "Experience in x and y and z This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "JavaScript, HTML, CSS", icon: <FaJsSquare />, description: "Experience in This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "C++", icon: <FaCogs />, description: "Experience in x and y and z and a and b This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Node.js", icon: <FaNodeJs />, description: "Experience in x and y and z and This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Database", icon: <FaDatabase />, description: "Experience in x and y and z This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." }
  ];

  return (
    <Container fluid id="skills"> 
      <h2>Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <Card>
              <Card.Body>
                <div className="icon">{skill.icon}</div>
                <Card.Title>{skill.title}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
