// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.


import Tags from "./Tags"
import Builder from "./Builder";
import DynamicComponent from "./DynamicComponent";

// Utility components.

import {convertToReact, convertToReactRedux} from "./utilities/CodeGenerator/React/export";
import { getNestedComponents, initialiseComponents} from "./utilities/Runtime"

// Reducers.
import { updateEvent, updateConfig, saveElement, updateSelectedComponent } from "./Index/Reducer";

// Utils
import { readData, writeData } from "./utilities/Storage";

class Index extends Component {
    constructor(props) {
        super(props);
        let components = readData("ui-editor");
        this.state = {
            components: components,
            selectedTag: "",
            component: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            },
            selectedComponent: "",
            folders: readData("folders"),
            selectedTab: "Events"
        }
        this.updateConfig = updateConfig.bind(this);
        this.updateEvent = updateEvent.bind(this);
        this.saveElement = saveElement.bind(this);
        this.updateSelectedComponent = updateSelectedComponent.bind(this);
        document.onkeydown = function keydown(e){
            if(e.altKey && e.keyCode==69) { // Alt + E
                // Open/close editor if any component is selected
                this.setState({
                    showEditor: !this.state.showEditor
                })
            }
        }.bind(this);

        window.refreshComponents = this.refreshComponents.bind(this);
    }

    refreshComponents() {
        this.setState({
            components: window.components
        })
    }

    updateFolders(folders) {
        this.setState({
            folders: folders
        })
        writeData("folders", folders)
    }

    openEditor() {
        this.setState({
            showEditor: true
        })
    }

    exportReact(e){
        window.visited = {};
        let nestedComponents = getNestedComponents(this.state.selectedComponent)
        // nested components contain duplicates. we need to remove it
        let uniqueComponents = {}
        nestedComponents.forEach(component=>{
            if(!uniqueComponents[component.name]){
                uniqueComponents[component.name]=component;
            }
        })
        console.log(Object.values(uniqueComponents).map(convertToReact).join("\n\n"))
    }

    exportReactRedux(e){
        window.visited = {};
        let nestedComponents = getNestedComponents(this.state.selectedComponent)
        // nested components contain duplicates. we need to remove it
        let uniqueComponents = {}
        nestedComponents.forEach(component=>{
            if(!uniqueComponents[component.name]){
                uniqueComponents[component.name]=component;
            }
        })
        console.log(Object.values(uniqueComponents).map(convertToReactRedux).join("\n\n"))
    }



    render() {
        const selectedComponent = this.state.selectedComponent || this.state.component;
        const randomKey = Math.ceil(Math.random() * 1000);
        window.components.forEach(initialiseComponents)
        return (
            <div >

                <Builder onSave={this.saveElement.bind(this)}/>
                <DynamicComponent onSave={this.props.onSave} key={randomKey} component={selectedComponent}/>


            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));