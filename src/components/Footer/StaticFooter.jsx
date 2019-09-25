import React from 'react';
import './StaticFooter.scss';

const StaticFooter = () => {
    return (
        <div className="static-footer">
            <div className="left-block">
                <span className="copyright">&copy;</span>
                JBG Hospitality Publications &amp; Supplies 2019
            </div>
            <div className="right-block">
                WWW.JBG.COM.PG
            </div>
        </div>
    )
}

export default StaticFooter