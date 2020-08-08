import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => {
    return (
        <div>
            <p>
                <strong>Módulo {activeModule.title}</strong>
            </p>
            <p>
                <span>Aula {activeLesson.title}</span>
            </p>
        </div>
    );
};

export default connect((state) => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
}))(Video);
