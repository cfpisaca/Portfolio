import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPython, FaJava, FaCode, FaNodeJs, FaDatabase, FaCogs, FaAtlas, FaEye, FaLaptop  } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    { title: "VR", icon: <FaEye />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands." },
    { title: "Machine Learning, Artificial Intelligence", icon: <FaCogs />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow." },
    { title: "Java", icon: <FaJava />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands." },
    { title: "Python", icon: <FaPython />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "JavaScript, HTML, CSS", icon: <FaCode />, description: "Experience in This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "C++", icon: <FaLaptop />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Node.js", icon: <FaNodeJs />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Database", icon: <FaDatabase />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." },
    { title: "Last Skill", icon: <FaAtlas />, description: "This skill enhances productivity by providing an organized space for seamless writing, editing, and formatting in Microsoft Word. Whether crafting documents, reports, or creative pieces, this skill facilitates the drafting process with user-friendly commands. Users can leverage it for writing assistance, formatting suggestions, and style enhancements to produce professional-grade content efficiently. Ideal for students, professionals, and anyone looking to streamline their writing workflow. It emphasizes intuitive navigation, clear guidance, and practical solutions tailored to your unique writing needs." }
  ];

  return (
    <Container fluid id="skills"> 
      <h2><strong>Skills</strong></h2>
      <p>Here are some of my skills, I'm looking to learn and discover.</p>
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
