import React, { Component } from "react";
import '../css/ScreenBanner.css';
import domains from '../data/domains.jsx';
import { Label } from "reactstrap";

class ScreenBanner extends Component {

    render() {
        return (
            <div className="v2">
                <div className="rectangle1"><img alt="profile" src={require('../images/kaiburr.png')} className="kaiburr" />
                    <div className="workSpace"><h1>Work Space</h1></div>
                    <div className="menuHeader"><b>Manage  Servers</b></div>
                    <div className="tabcontent">
                        {
                            Object.keys(domains).map(key => {
                                var domain = domains[key];
                                return (
                                    <React.Fragment key={key}>

                                        <dl>
                                            <dt >
                                                {
                                                    this.props.selected === domain.domainNo ? <img alt="logo" style={{ height: '32px' }} src={require("../images/selected1.png")} /> : null
                                                }
                                                <img alt="logo" style={{ height: '32px' }} src={require("../images/" + domain.domainLogo)} />
                                                <Label style={{ cursor: "pointer" }} onClick={() => this.props.onClick(domain.domainNo, [])}>{domain.domainName}</Label>
                                            </dt>
                                        </dl>
                                    </React.Fragment>

                                )
                            })
                        }
                    </div>
                </div>
           </div>
        );
    }
}

export default ScreenBanner;
