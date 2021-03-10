import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardThreeColGrid from './components/cards/CardThreeColGrid';
import DescriptionOneCardWithImage from './components/cards/DescriptionOneCardWithImage';
import TextHeaderTwoCardsWithImage from './components/cards/TextHeaderTwoCardsWithImage';
import ContactCardWithForm from './components/cards/ContactCardWithForm';
import Footer from './components/footer/Footer';
import MainHero from './components/hero/MainHero';
import Hero from './components/hero/Hero'

import {textHeaderTwoCardsWithImage, descriptionOneCardWithImage,footer, carossel} from './Const'

function App() {


  return (
    <div>
      <MainHero 
      titleSlider1 = {carossel.titleSlider1}
      subTitle = {carossel.subTitle}
      titleSlider2 = {carossel.titleSlider2}
      titleSlider3 = {carossel.titleSlider3}
      />
      <div className="container">      
        <CardThreeColGrid />
        <TextHeaderTwoCardsWithImage 
        title ={textHeaderTwoCardsWithImage.title}
        titleDetails ={textHeaderTwoCardsWithImage.titleDetails}
        details1 ={textHeaderTwoCardsWithImage.details1}
        details2 ={textHeaderTwoCardsWithImage.details2}
        />
        <DescriptionOneCardWithImage
        title ={descriptionOneCardWithImage.title}
        price ={descriptionOneCardWithImage.price}
        by ={descriptionOneCardWithImage.by}
        longDescription ={descriptionOneCardWithImage.longDescription}
        shortDescription ={descriptionOneCardWithImage.shortDescription}
        titleDetails ={descriptionOneCardWithImage.titleDetails}
        details1 ={descriptionOneCardWithImage.details1}
        details2 ={descriptionOneCardWithImage.details2}
        details3 ={descriptionOneCardWithImage.details3}
        details4 ={descriptionOneCardWithImage.details4}
        details5 ={descriptionOneCardWithImage.details5}
        />
        <ContactCardWithForm />
        <Footer 
        colOneTitle = {footer.colOneTitle}
        colOneDescription = {footer.colOneDescription}
        colOneMore = {footer.colOneMore}
        colTwoTitle = {footer.colTwoTitle}
        colTwoNav1 = {footer.colTwoNav1}
        colTwoNav2 = {footer.colTwoNav2}
        colTwoNav3 = {footer.colTwoNav3}
        colTwoNav4 = {footer.colTwoNav4}
        colTwoNav5 = {footer.colTwoNav5}
        colTwoNav6 = {footer.colTwoNav6}
        colTwoNav1 = {footer.colTwoNav1}
        colThreeTitle = {footer.colThreeTitle}
        colThreeAddress1 = {footer.colThreeAddress1}
        colThreeAddress2 = {footer.colThreeAddress2}
        colfourTitle = {footer.colfourTitle}
        colfourTel1 = {footer.colfourTel1}
        colfourTel2 = {footer.colfourTel2}
        colfournewsletter = {footer.colfournewsletter}
        colfournewsletterDescr = {footer.colfournewsletterDescr}
        />
      </div>  
    </div>
  );
}

export default App;
