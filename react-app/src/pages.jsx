
import React from "react"

export default class LoadPages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "home"
        };
    }
    render() {
        let page = "home";
        if (page==='home'){
          return(
            <div>
              <p>
                This is pages page!
              </p>
            </div>
          )
        }

    }
    // LoadPage() {
    //     let page = "home";
    //     console.log(page);
    //   }

}
  