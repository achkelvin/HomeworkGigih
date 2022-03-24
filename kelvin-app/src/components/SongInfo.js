import React,{Component} from "react";

export class SongInfo extends Component{

    render(){
        return(
        <div>
            <table>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Albums</th>
              </tr>
              <tr>
                <td>1</td>
                <td>deja vu</td>
                <td>Olivia Rodrigo</td>
                <td>SOUR</td>
              </tr>
			</table>
        </div>        
        )
    }
}