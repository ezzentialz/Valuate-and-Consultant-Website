import type { TranslationKeys } from '@/types';

export const translations: Record<'th' | 'en', TranslationKeys> = {
  th: {
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับเรา',
      services: 'บริการ',
      properties: 'ซื้อ ขาย เช่า',
      branches: 'สาขา',
      careers: 'ร่วมงานกับเรา',
      articles: 'บทความวิจัย',
      contact: 'ติดต่อเรา',
    },
    hero: {
      title: 'บริษัท เดอะแวลูเอชั่น แอนด์ คอนซัลแทนท์ส จำกัด',
      subtitle: 'ผู้นำการประเมินมูลค่าทรัพย์สินของคนไทย กว่า 30 ปี',
      cta: 'สำรวจบริการของเรา',
      scrollDown: 'เลื่อนลงเพื่อดูเพิ่มเติม',
    },
    about: {
      title: 'เกี่ยวกับเรา',
      subtitle: 'ประสบการณ์กว่า 30 ปีในการประเมินมูลค่าทรัพย์สิน',
      description:
        'บริษัท เดอะแวลูเอชั่น แอนด์ คอนซัลแทนท์ส จำกัด ก่อตั้งขึ้นในปี พ.ศ. 2535 เป็นบริษัทประเมินมูลค่าทรัพย์สินชั้นนำของประเทศไทย ให้บริการครบทุกประเภท ทั้งภาครัฐและเอกชน ด้วยทีมงานผู้เชี่ยวชาญมากกว่า 100 ท่าน',
      stats: {
        years: 'ปีประสบการณ์',
        projects: 'โครงการที่สำเร็จ',
        clients: 'ลูกค้าที่เชื่อมั่น',
        branches: 'สาขาทั่วไทย',
      },
      readMore: 'อ่านเพิ่มเติม',
    },
    services: {
      title: 'บริการของเรา',
      subtitle: 'บริการประเมินมูลค่าครบทุกประเภท ตามมาตรฐานสากล',
      items: [
        {
          title: 'ประเมินมูลค่าอสังหาริมทรัพย์',
          description:
            'ที่ดิน อาคารพักอาศัย โครงการพัฒนา อาคารสำนักงาน ห้างสรรพสินค้า โรงแรม รีสอร์ท โรงงาน คลังสินค้า',
          icon: 'building',
        },
        {
          title: 'ประเมินเครื่องจักรและอุปกรณ์',
          description:
            'เครื่องจักรกลหนัก เครื่องจักรอุตสาหกรรม อุปกรณ์ผลิต เครื่องจักรไฟฟ้าและพลังงานทดแทน',
          icon: 'cog',
        },
        {
          title: 'ประเมินมูลค่าธุรกิจ',
          description:
            'การประเมินหุ้น การร่วมกิจการ M&A การจัดสรรราคาซื้อ การทดสอบความสูญเสียมูลค่า',
          icon: 'chart',
        },
        {
          title: 'สำรวจและวิจัยความเป็นไปได้',
          description:
            'ศึกษาความเป็นไปได้โครงการ วิเคราะห์ตลาด วิเคราะห์การเงิน แผนธุรกิจ',
          icon: 'search',
        },
        {
          title: 'ที่ปรึกษาการลงทุนและขายทรัพย์สิน',
          description:
            'ค้นหาลูกค้าซื้อ/เช่า การตลาดทรัพย์สิน การเจรจาราคา ปิดการขาย',
          icon: 'handshake',
        },
        {
          title: 'บริหารและจัดการทรัพย์สิน',
          description:
            'การดูแลทรัพย์สิน การให้เช่า การบำรุงรักษา รายงานผลการดำเนินงาน',
          icon: 'briefcase',
        },
        {
          title: 'ตรวจสอบอาคารและสถาปัตยกรรม',
          description:
            'สำรวจสภาพอาคาร ตรวจสอบโครงสร้าง ประเมินสภาพชำรุด แผนซ่อมบำรุง',
          icon: 'shield',
        },
        {
          title: 'งานประเมินเพื่อวัตถุประสงค์พิเศษ',
          description:
            'หลักทรัพย์กู้ยืม บัญชี/ภาษี มรดก การอุทธรณ์ ระบบบริหารทรัพย์สินของธนาคาร',
          icon: 'file',
        },
      ],
    },
    properties: {
      title: 'ทรัพย์สิน ซื้อ / ขาย / เช่า',
      subtitle: 'ค้นหาทรัพย์สินที่เหมาะสมกับคุณ',
      buy: 'ต้องการซื้อ',
      rent: 'ต้องการเช่า',
      sell: 'ต้องการฝากขาย',
      agent: 'สนใจเป็นตัวแทนขาย',
    },
    branches: {
      title: 'สาขาของเรา',
      subtitle: 'ให้บริการทั่วประเทศไทย',
    },
    careers: {
      title: 'ร่วมงานกับเรา',
      subtitle: 'เป็นส่วนหนึ่งของทีมผู้เชี่ยวชาญชั้นนำ',
      apply: 'สมัครงาน',
    },
    articles: {
      title: 'บทความวิจัยและข่าวสาร',
      subtitle: 'ความรู้และข้อมูลล่าสุดจากทีมวิจัยของเรา',
      readMore: 'อ่านต่อ',
    },
    contact: {
      title: 'ติดต่อเรา',
      subtitle: 'พร้อมให้คำปรึกษาและบริการทุกเมื่อ',
      name: 'ชื่อ-นามสกุล',
      email: 'อีเมล',
      phone: 'เบอร์โทรศัพท์',
      message: 'ข้อความ',
      submit: 'ส่งข้อความ',
      address: 'ที่อยู่',
      phoneLabel: 'โทรศัพท์',
      emailLabel: 'อีเมล',
    },
    footer: {
      rights: 'สงวนลิขสิทธิ์',
      privacy: 'นโยบายความเป็นส่วนตัว',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      properties: 'Buy / Sell / Rent',
      branches: 'Branches',
      careers: 'Careers',
      articles: 'Research Articles',
      contact: 'Contact',
    },
    hero: {
      title: 'The Valuation & Consultants Co., Ltd.',
      subtitle: "Thailand's Leading Property Valuation Expert for Over 30 Years",
      cta: 'Explore Our Services',
      scrollDown: 'Scroll to Discover More',
    },
    about: {
      title: 'About Us',
      subtitle: 'Over 30 Years of Property Valuation Excellence',
      description:
        'The Valuation & Consultants Co., Ltd. was established in 1992 as Thailand\'s premier property valuation firm. We provide comprehensive valuation services for all property types, serving both public and private sectors with a team of over 100 certified experts.',
      stats: {
        years: 'Years Experience',
        projects: 'Successful Projects',
        clients: 'Trusted Clients',
        branches: 'Branches Nationwide',
      },
      readMore: 'Read More',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Valuation Services Meeting International Standards',
      items: [
        {
          title: 'Real Estate Valuation',
          description:
            'Land, residential buildings, development projects, office buildings, shopping centers, hotels, resorts, factories, warehouses',
          icon: 'building',
        },
        {
          title: 'Machinery & Equipment Valuation',
          description:
            'Heavy machinery, industrial equipment, production machinery, electrical machinery and renewable energy',
          icon: 'cog',
        },
        {
          title: 'Business Valuation',
          description:
            'Share valuation, M&A, purchase price allocation, impairment testing',
          icon: 'chart',
        },
        {
          title: 'Feasibility Studies & Research',
          description:
            'Project feasibility analysis, market research, financial analysis, business planning',
          icon: 'search',
        },
        {
          title: 'Investment Advisory & Property Sales',
          description:
            'Buyer/tenant sourcing, property marketing, price negotiation, deal closing',
          icon: 'handshake',
        },
        {
          title: 'Asset Management',
          description:
            'Property maintenance, leasing management, upkeep, performance reporting',
          icon: 'briefcase',
        },
        {
          title: 'Building Inspection & Architecture',
          description:
            'Building condition surveys, structural assessment, deterioration evaluation, maintenance planning',
          icon: 'shield',
        },
        {
          title: 'Special Purpose Valuation',
          description:
            'Loan collateral, accounting/tax, inheritance, litigation, bank asset management systems',
          icon: 'file',
        },
      ],
    },
    properties: {
      title: 'Properties Buy / Sell / Rent',
      subtitle: 'Find the Perfect Property for You',
      buy: 'Want to Buy',
      rent: 'Want to Rent',
      sell: 'Want to Sell',
      agent: 'Become an Agent',
    },
    branches: {
      title: 'Our Branches',
      subtitle: 'Serving Nationwide Across Thailand',
    },
    careers: {
      title: 'Join Our Team',
      subtitle: 'Be Part of Thailand\'s Leading Valuation Experts',
      apply: 'Apply Now',
    },
    articles: {
      title: 'Research Articles & News',
      subtitle: 'Latest Insights from Our Research Team',
      readMore: 'Read More',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to Provide Expert Consultation Anytime',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Message',
      submit: 'Send Message',
      address: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
    },
    footer: {
      rights: 'All Rights Reserved',
      privacy: 'Privacy Policy',
    },
  },
};

export function getTranslation(locale: 'th' | 'en'): TranslationKeys {
  return translations[locale];
}