import {h, render, Component} from 'preact'

import Block from '../../components/block/block'
import {CodeBlock, CodeLine} from '../../components/code/code'
import {Pallet, Color} from '../../components/color/color'

import Page from '../../layouts/page/page'

class Type extends Component{
  constructor(props, state){
    super()
  }

  render(props, state){
    return (
      <Page title='Typography' description='typography configuration'>
        <Block title='Paragraph'>
          <p>  <CodeLine>console.log('hello world')</CodeLine> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus laboriosam eum placeat, harum sint quae, impedit laborum perferendis ad consequuntur odio qui itaque deserunt quia aut atque reprehenderit ut cumque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deleniti excepturi illo doloribus commodi sequi, ullam pariatur omnis unde ut delectus natus nobis, quibusdam quas fugiat ab.
          </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus laboriosam eum placeat, harum sint quae, impedit laborum perferendis ad consequuntur odio qui itaque deserunt quia aut atque reprehenderit ut cumque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deleniti excepturi illo doloribus commodi sequi, ullam pariatur omnis unde ut delectus natus nobis, quibusdam quas fugiat ab.
          </p>
        </Block>

        <Block title='headers'>
          <h1> Header h1 </h1>
          <h2> Header h2 </h2>
          <h3> Header h3 </h3>
          <h4> Header h4 </h4>
          <h5> Header h5 </h5>
          <h6> Header h6 </h6>
        </Block>

        <Block title='lists'>
          <ul>
            <li> first </li>
            <li> second </li>
            <li> thrid </li>
            <li> fourty </li>
          </ul>

          <ol>
            <li> first </li>
            <li> second </li>
            <li> thrid </li>
            <li> fourty </li>
          </ol>
        </Block>

        <Block title='Links and others elements'>
          <a href="google.com"> This is a link </a> <br/>
          <small> Small text </small> <br/>
          <b> bold text </b> <br/>
          <mark> this is a marked text </mark> <br/><br/>

          <p>A line</p>
          <hr/>

          <blockquote> blockquote - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam perferendis natus obcaecati impedit, illo voluptatem mollitia quas, beatae eos aliquid sequi culpa quasi ut asperiores iste incidunt, tenetur provident. Non! </blockquote>
        </Block>
      </Page>
    )
  }
}

export default Type
