import React from "react";
import { ETag } from "../../../interfaces/tag.enum";
import Tag from "../../shared/Tag.project.component";

const LabelsInfo: React.FC<{ technologies: Array<string> }> = ({ technologies }) => {
    return (
        <div>
            <h3 className="size-bold-xl-three-md-two margin-bottom-16 margin-top-16">Labels and technologies</h3>
            {
                technologies.map((tech, i) => (
                    <Tag type={ETag.purple} content={tech} key={i} />
                ))
            }
        </div>
    )
}

export default LabelsInfo;