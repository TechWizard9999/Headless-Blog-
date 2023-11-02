import Card from "@/components/card/card";
const Home = () =>(
  <div className="container pb-80">
    <Card 
    label='Product Reviews'
    title='This is the best product ever seen'
    summary='This is the summary part of the product'
    href='#'
    className="mb-30"/>
    <div className="row">
      <div className="col col_4 m-mw-100"> <Card 
    label='Opinion'
    title='This is the best product ever seen'
    summary='This is the summary part of the product'
    href='#'
    className="mb-30"
    /></div>
      <div className="col col_4 m-mw-100"> <Card 
    label='Product Reviews'
    title='This is the best product ever seen'
    summary='This is the summary part of the product'
    href='#'
    className="mb-30"/></div>
      <div className="col col_4 m-mw-100"><Card 
    label='Travel Guides'
    title='This is the best product ever seen'
    summary='This is the summary part of the product'
    href='#'
    className="mb-30"/></div>
    </div>
  </div>
)

export default Home;