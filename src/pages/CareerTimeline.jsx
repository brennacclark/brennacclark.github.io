import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "font-awesome/css/font-awesome.min.css";

const CareerTimeline = () => {
  return (
    <VerticalTimeline>
      {/* Computer Science Peer Tutor */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep. 2012 – May 2015"
        iconStyle={{ background: "#C3CB98", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-briefcase"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          Computer Science Peer Tutor
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          Endicott College, Beverly, MA
        </h5>
        <p>
          Explained fundamental programming concepts to students, assisted
          individuals and small groups to complete programming assignments.
        </p>
      </VerticalTimelineElement>

      {/* Sailbot Competition */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Spring 2013"
        iconStyle={{ background: "#FFB778", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-trophy"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">Sailbot Competition</h4>
        <h5 className="vertical-timeline-element-subtitle">
          Endicott College, Beverly, MA
        </h5>
        <p>
          Team of 10 designed and built an autonomous robotic sailboat and
          entered it in the 2013 Sailbot competition.
        </p>
        <p>
          5th place overall (1-meter class) <br /> Least Expensive Boat Award
        </p>
      </VerticalTimelineElement>

      {/* Publication Management Software Quality Assurance Intern */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2013 – July 2013"
        iconStyle={{ background: "#C3CB98", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-briefcase"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          Publication Management Software Quality Assurance Intern
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          Firebrand Technologies, Newburyport, MA
        </h5>
        <p>
          Developed manual tests to track software performance issues, tested
          usability and compatibility in new software.
        </p>
      </VerticalTimelineElement>

      {/* CT Scan Software Quality Assurance Intern */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan. 2014 – April 2014"
        iconStyle={{ background: "#C3CB98", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-briefcase"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          CT Scan Software Quality Assurance Intern
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          Neurologica Corporation, Danvers, MA
        </h5>
        <p>
          Developed and executed automated tests for portable CT scan GUI,
          documented and tracked bugs, configured and imaged computers.
        </p>
      </VerticalTimelineElement>

      {/* IBM Rational ClearCase Software Development Intern */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2014 – December 2014"
        iconStyle={{ background: "#C3CB98", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-briefcase"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          IBM Rational ClearCase Software Development Intern
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          IBM, Littleton, MA
        </h5>
        <p>
          Executed regression tests, organized results, located and debugged
          test defects, and gained experience in an agile development
          environment.
        </p>
      </VerticalTimelineElement>

      {/* Education */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Sep. 2011 – May 2015"
        iconStyle={{ background: "#6BA3D6", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-graduation-cap"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          Bachelor of Science in Computer Science
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          Endicott College, Beverly, MA
        </h5>
        <p>Minors in Applied Mathematics and Communications</p>
        <p>Concentration in Interactive Technologies</p>
        <p>
          Vice President of the Computer Science Club and participated in other
          activities such as Lighthouse Leadership Society Retreat and Sailbot
          Competition
        </p>
      </VerticalTimelineElement>

      {/* SOFTWARE ENGINEER ▪ IBM Order Management */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015-2022"
        iconStyle={{ background: "#C3CB98", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-briefcase"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">Software Engineer</h4>
        <h5 className="vertical-timeline-element-subtitle">
          IBM Order Management, Littleton, MA
        </h5>
        <p>
          Exhibited excellence in software engineering, improved database
          efficiency for OMS, reduced resources for wiki storage, and installed
          and tested OMS Add-on – Call Center Application and IBM Store
          Engagement.
        </p>
      </VerticalTimelineElement>

      {/* 2021 Outstanding Technical Achievement Award */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021"
        iconStyle={{ background: "#FFB778", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-trophy"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          Outstanding Technical Achievement Award
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          IBM, Littleton, MA
        </h5>
        <p>
          Led the test planning and execution to merge multiple version
          development streams into one central stream, resulting in streamlined
          operations, enhanced team cohesion, and improved quality control
          measures.
        </p>
      </VerticalTimelineElement>

      {/* SOFTWARE TEST ENGINEER ▪ IBM Inventory Visibility Service */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022-2023"
        iconStyle={{ background: "#C3CB98", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-briefcase"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          Software Test Engineer
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          IBM Inventory Visibility Service, Littleton, MA
        </h5>
        <p>
          Technical strategist in charge of planning and executing functional
          and regression testing. Positively contributed to customer experience.
          Utilized PagerDuty and New Relic for live production monitoring.
        </p>
      </VerticalTimelineElement>

      {/* Google UX Design Certificate */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Certified October 2023" // Replace with the actual date of completion
        iconStyle={{ background: "#6BA3D6", color: "#fff" }}
        icon={
          <div
            style={{ marginTop: "1vh", textAlign: "center", fontSize: "30px" }}
          >
            <i className="fa fa-graduation-cap"></i>
          </div>
        }
      >
        <h4 className="vertical-timeline-element-title">
          Google UX Design Certificate
        </h4>
        <h5 className="vertical-timeline-element-subtitle">Google</h5>
        <p>
          Learned the foundations of UX design, including empathizing with
          users, building wireframes and prototypes, and conducting research to
          test designs. Developed personas, user stories, and user journey maps.
          Conducted usability studies and completed several projects.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default CareerTimeline;
