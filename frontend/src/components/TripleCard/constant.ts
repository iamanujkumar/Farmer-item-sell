import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  import mandibhav from '../../assets/Mandibhav.png'

  import SpaceCity1 from "../../assets/paid.jpg";
  import SpaceCity5 from "../../assets/farmer.png";
  import SpaceCity6 from "../../assets/buy.png";
  import SpaceCity7 from "../../assets/agri.jpg";
  import SpaceCity8 from "../../assets/Mandibhav.png";
  import SpaceCity9 from "../../assets/aa.png";

  
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "मंडी भाव",
      content: "जानिए आपके क्षेत्र के मंडी का भाव",
      backgroundImage: mandibhav,
      url : '/mandi-bhav'
    },
    {
      icon: RxPencil2,
      title: "बेचें सामान सबसे अच्छे दाम पर",
      // title: "उच्च मूल्य वाली फसलों की खेती करें",
      content: "आप अपने सामान को अच्छे दाम पर बेचने के लिए निम्नलिखित सुझावों का पालन कर सकते हैं",
      backgroundImage: SpaceCity9,
      url : '/add-item'
    },
    {
      icon: RxPencil2,
      title: "खरीदें सामान सबसे अच्छे दाम पर",
      // title: "उच्च मूल्य वाली फसलों की खेती करें",
      content: "आपको अपने ज़रूरत के सामान खरीदने...",
      backgroundImage: SpaceCity6,
      url : '/products'
    },
    {
      icon: RxDesktop,
      title: "जैविक खेती (Organic Farming)",
      content: "जैविक खेती के प्रमुख सिद्धांत, खेती करने का सही तरीका कई महत्वपूर्ण चरणों पर निर्भर करता है",
      backgroundImage: SpaceCity6,
      url : '/mandi-bhav'
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity7,
      url : '/mandi-bhav'
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity5,
      url : '/mandi-bhav'
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity8,
      url : '/mandi-bhav'
    },
  ];