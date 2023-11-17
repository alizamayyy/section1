// pages/index.js

import HowWeWorkSection from '@/components/HowWeWorkSection';
import CardComponent from '@/components/cardcomponent';
import CategoriesSection from '@/components/categoriesSection';
 // Note: Corrected the import path
import droughtImage from '@/public/images/drought.jpg';
import howWeWorkImage1 from '@/public/images/hww1.png'
import howWeWorkImage2 from '@/public/images/hww2.png'

export default function Home() {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
      <div className="text-center text-xs p-8">
        Causes to care
        <h1 className='text-2xl font-bold'>Be the reason someone smiles</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare convallis est ac venenatis. Ut non dui sit amet erat egestas viverra. Morbi sed feugiat mauris.
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mb-20'>
        <CardComponent
          title='#Education'
          description='Relief for Drought Affected'
          progress='45%'
          headerImage={droughtImage.src}
          raised={100}
          goal={1000}
          donators={10}
        />
        <CardComponent
          title='#Education'
          description='Relief for Drought Affected'
          progress='45%'
          headerImage={droughtImage.src}
          raised={100}
          goal={1000}
          donators={10}
        />
        <CardComponent
          title='#Education'
          description='Relief for Drought Affected'
          progress='45%'
          headerImage={droughtImage.src}
          raised={100}
          goal={1000}
          donators={10}
        />
        <CardComponent
          title='#Education'
          description='Relief for Drought Affected'
          progress='45%'
          headerImage={droughtImage.src}
          raised={100}
          goal={1000}
          donators={10}
        />
        <CardComponent
          title='#Education'
          description='Relief for Drought Affected'
          progress='45%'
          headerImage={droughtImage.src}
          raised={100}
          goal={1000}
          donators={10}
        />
        <CardComponent
          title='#Education'
          description='Relief for Drought Affected'
          progress='45%'
          headerImage={droughtImage.src}
          raised={100}
          goal={1000}
          donators={10}
        />
      </div>
      <div className='mb-20'>
        <HowWeWorkSection headerImage={howWeWorkImage2.src} headerImage1={howWeWorkImage1.src}/>
      </div>
      <div className='flex flex-row grid grid-cols-4 md:grid-cols-2 gap-4 lg:grid-cols-4 mb-20'>
        <CategoriesSection title='Build a Home' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        }/>
        <CategoriesSection title='Medical Facilities' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
        }/>
        <CategoriesSection title='Food and Water' icon={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <g clip-path="url(#clip0_1_267)">
          <path d="M23.3045 28.0363C23.3045 28.0363 23.4115 28.1432 23.6254 28.3572C23.8394 28.5712 23.9464 28.9709 23.9464 29.5565C23.9464 30.1421 23.7324 30.6489 23.3045 31.0768C22.8765 31.5047 22.3698 31.7187 21.7842 31.7187C21.1986 31.7187 20.6919 31.5047 20.2639 31.0768C19.836 30.6489 19.622 30.1421 19.622 29.5565C19.622 28.9709 19.836 28.4642 20.2639 28.0363C20.6919 27.6083 21.1986 27.3944 21.7842 27.3944C22.3698 27.3944 22.8765 27.6083 23.3045 28.0363ZM21.0072 28.7795C21.0072 28.7795 20.9565 28.8302 20.8552 28.9315C20.7538 29.0329 20.7031 29.2412 20.7031 29.5565C20.7031 29.8719 20.8045 30.1309 21.0072 30.3336C21.2099 30.5363 21.4689 30.6376 21.7842 30.6376C22.0995 30.6376 22.3585 30.5363 22.5612 30.3336C22.7639 30.1309 22.8653 29.8719 22.8653 29.5565C22.8653 29.2412 22.7639 28.9822 22.5612 28.7795C22.3585 28.5768 22.0995 28.4755 21.7842 28.4755C21.4689 28.4755 21.2099 28.5768 21.0072 28.7795ZM28.3383 28.9484C28.6536 28.9484 28.8112 29.1061 28.8112 29.4214C28.8112 29.4664 28.8112 29.5115 28.8112 29.5565L28.2707 33.4079C28.2256 33.7232 28.0455 33.8809 27.7302 33.8809H19.0815C18.7211 33.8809 18.541 33.7007 18.541 33.3403C18.541 32.98 18.7211 32.7998 19.0815 32.7998H27.2572L27.7302 29.3538C27.7752 29.0385 27.9554 28.8809 28.2707 28.8809C28.2707 28.8809 28.2932 28.9034 28.3383 28.9484ZM29.7572 21.1106C29.8473 21.2007 29.8923 21.3133 29.8923 21.4484C29.8923 21.4935 29.8923 21.516 29.8923 21.516L29.0815 27.3944C29.0365 27.7097 28.8563 27.8673 28.541 27.8673C28.541 27.8673 28.5184 27.8673 28.4734 27.8673C28.1581 27.8223 28.0004 27.6421 28.0004 27.3268C28.0004 27.2818 28.0004 27.2592 28.0004 27.2592L28.7437 21.989H27.122C27.032 22.7097 26.7392 23.3516 26.2437 23.9146C25.7482 24.4777 25.1063 24.9282 24.318 25.266C23.5297 25.6038 22.6851 25.7728 21.7842 25.7728C21.7392 25.7728 21.6941 25.7728 21.6491 25.7728C21.0184 25.7728 20.2977 25.6151 19.4869 25.2998C18.6761 24.9845 18.0229 24.6016 17.5274 24.1511C17.5274 24.1511 17.5049 24.1511 17.4599 24.1511C17.3698 24.5565 17.1671 24.9169 16.8518 25.2322C16.8968 25.4124 16.9193 25.5926 16.9193 25.7728C16.9193 26.4935 16.6716 27.1241 16.1761 27.6646C16.6716 27.98 16.9193 28.4304 16.9193 29.016C16.9193 29.1962 16.8968 29.3764 16.8518 29.5565H17.4599C17.8202 29.5565 18.0004 29.7367 18.0004 30.0971V31.1782C18.0004 31.9439 17.7414 32.5858 17.2234 33.1038C16.7054 33.6219 16.0635 33.8809 15.2977 33.8809H7.18961C6.82925 33.8809 6.64907 33.7007 6.64907 33.3403C6.64907 32.98 6.82925 32.7998 7.18961 32.7998H15.2977C15.7482 32.7998 16.1311 32.6421 16.4464 32.3268C16.7617 32.0115 16.9193 31.6286 16.9193 31.1782V30.6376H14.0815C13.7211 30.6376 13.541 30.4574 13.541 30.0971C13.541 29.7367 13.7211 29.5565 14.0815 29.5565H15.2977C15.6581 29.5565 15.8383 29.3764 15.8383 29.016C15.8383 28.6556 15.6581 28.4755 15.2977 28.4755H13.4058L11.3788 30.9755C11.2887 31.1106 11.1536 31.1782 10.9734 31.1782C10.7932 31.1782 10.6581 31.1106 10.568 30.9755L10.2977 30.6376H1.78421V31.1782C1.78421 31.6286 1.94186 32.0115 2.25718 32.3268C2.57249 32.6421 2.95538 32.7998 3.40583 32.7998H5.02745C5.38781 32.7998 5.56799 32.98 5.56799 33.3403C5.56799 33.7007 5.38781 33.8809 5.02745 33.8809H3.40583C2.64006 33.8809 1.99817 33.6219 1.48015 33.1038C0.962134 32.5858 0.703125 31.9439 0.703125 31.1782V30.0971C0.703125 29.7367 0.883305 29.5565 1.24367 29.5565H1.85177C1.80673 29.3764 1.78421 29.1962 1.78421 29.016C1.78421 28.4304 2.03195 27.98 2.52745 27.6646C2.03195 27.1241 1.78421 26.4935 1.78421 25.7728C1.78421 25.5475 1.80673 25.3448 1.85177 25.1646C1.5815 24.8944 1.40132 24.5565 1.31123 24.1511H1.24367C0.883305 24.1511 0.703125 23.971 0.703125 23.6106C0.703125 22.4394 1.04096 21.3583 1.71664 20.3673C1.80673 20.1872 1.94186 20.0971 2.12204 20.0971C2.4824 20.0971 2.66258 20.2773 2.66258 20.6376C2.66258 20.7277 2.64006 20.8178 2.59502 20.9079C2.14457 21.5836 1.8743 22.3043 1.78421 23.07H16.9193C16.8293 22.3043 16.5477 21.5836 16.0747 20.9079C15.6018 20.2322 15.0049 19.7029 14.2842 19.32C13.5635 18.9372 12.8202 18.7457 12.0545 18.7457H6.64907C5.65808 18.7457 4.75718 19.016 3.94637 19.5565C3.85628 19.6016 3.76619 19.6241 3.6761 19.6241C3.31574 19.6241 3.13556 19.4439 3.13556 19.0836C3.13556 18.9034 3.20312 18.7682 3.33826 18.6782C4.32925 18.0025 5.43285 17.6646 6.64907 17.6646H12.0545C12.0995 17.6646 12.2121 17.6646 12.3923 17.6646L12.0545 16.7863C12.0545 16.6962 12.0545 16.6286 12.0545 16.5836C12.0545 16.2232 12.2347 16.043 12.595 16.043H14.7572C14.9824 16.043 15.1401 16.1556 15.2302 16.3809L15.568 17.2592L15.9058 16.3809C15.9959 16.1556 16.1536 16.043 16.3788 16.043C16.4689 16.043 16.5365 16.043 16.5815 16.043L18.2031 16.5836C18.3383 16.6737 18.4509 16.7863 18.541 16.9214L18.6761 17.5295L18.541 15.57C18.541 15.525 18.541 15.5025 18.541 15.5025C18.541 15.3673 18.586 15.2547 18.6761 15.1646L18.8112 14.9619H9.89231C9.53195 14.9619 9.35177 14.7818 9.35177 14.4214C9.35177 14.061 9.53195 13.8809 9.89231 13.8809H18.541V13.3403C18.541 12.98 18.3608 12.7998 18.0004 12.7998H3.94637C3.58601 12.7998 3.40583 12.98 3.40583 13.3403V13.8809H7.73015C8.09051 13.8809 8.27069 14.061 8.27069 14.4214C8.27069 14.7818 8.09051 14.9619 7.73015 14.9619H3.4734L3.74367 17.1241C3.74367 17.1691 3.74367 17.1917 3.74367 17.1917C3.74367 17.507 3.58601 17.6872 3.27069 17.7322C3.22565 17.7322 3.20312 17.7322 3.20312 17.7322C2.88781 17.7322 2.70763 17.5746 2.66258 17.2592C2.43736 15.3673 2.32475 14.4214 2.32475 14.4214V13.3403C2.32475 12.8899 2.4824 12.507 2.79772 12.1917C3.11303 11.8764 3.49592 11.7187 3.94637 11.7187H5.02745V11.1782C5.02745 10.7277 5.18511 10.3448 5.50042 10.0295C5.81574 9.71419 6.19862 9.55654 6.64907 9.55654H9.35177V6.11059C9.35177 5.52501 9.59952 5.07455 10.095 4.75924L14.9599 1.516C15.05 1.47095 15.1401 1.44843 15.2302 1.44843C15.4103 1.44843 15.568 1.53852 15.7031 1.7187L16.9193 3.47546C16.9644 3.56555 16.9869 3.67816 16.9869 3.81329C16.9869 3.99347 16.8968 4.12861 16.7166 4.2187L12.595 6.98897V9.55654H15.2977C15.7482 9.55654 16.1311 9.71419 16.4464 10.0295C16.7617 10.3448 16.9193 10.7277 16.9193 11.1782V11.7187H18.0004C18.4509 11.7187 18.8338 11.8764 19.1491 12.1917C19.4644 12.507 19.622 12.8899 19.622 13.3403V13.8809L20.2977 13.0025C20.3878 12.8673 20.5229 12.7998 20.7031 12.7998C20.8383 12.7998 20.9734 12.8448 21.1085 12.9349L21.7166 13.6106L21.7842 12.7322C21.7842 12.507 21.9193 12.3493 22.1896 12.2592L23.2707 11.989C23.3157 11.9439 23.3608 11.9214 23.4058 11.9214C23.4959 11.9214 23.586 11.9439 23.6761 11.989L25.2977 12.8673C25.4779 12.9574 25.568 13.1151 25.568 13.3403C25.568 13.7007 25.3878 13.8809 25.0274 13.8809C24.9374 13.8809 24.8473 13.8583 24.7572 13.8133L23.3383 13.07L22.8653 13.2052L22.7302 14.6241C22.8202 14.7142 22.8653 14.8043 22.8653 14.8944L23.1356 18.4079L23.4734 18.4755L23.9464 14.8944C23.9914 14.5791 24.1716 14.4214 24.4869 14.4214C24.577 14.4214 24.6446 14.4439 24.6896 14.489L26.7842 15.2998L27.1896 13.2052C27.2797 12.9349 27.4599 12.7998 27.7302 12.7998C27.9554 12.7998 28.113 12.8899 28.2031 13.07L29.8247 15.7728C29.8698 15.8628 29.8923 15.9529 29.8923 16.043C29.8923 16.0881 29.8923 16.1331 29.8923 16.1782L29.1491 19.4214C29.104 19.6917 28.9464 19.8268 28.6761 19.8268C28.6311 19.8268 28.586 19.8268 28.541 19.8268C28.2707 19.7818 28.1356 19.6016 28.1356 19.2863C28.1356 19.2412 28.1356 19.2187 28.1356 19.2187L28.7437 16.1106L28.0004 14.7592L27.7302 15.9755C27.7302 15.9755 27.7302 15.998 27.7302 16.043C27.7302 16.0881 27.7302 16.1106 27.7302 16.1106L26.7842 20.9079H29.3518C29.532 20.9079 29.6671 20.9755 29.7572 21.1106ZM10.4329 6.11059V9.55654H11.5139V6.7187C11.5139 6.53852 11.604 6.38086 11.7842 6.24573L15.7031 3.61059L15.095 2.73221L10.7031 5.70518C10.5229 5.79527 10.4329 5.93041 10.4329 6.11059ZM6.10853 11.7187H15.8383V11.1782C15.8383 10.8178 15.6581 10.6376 15.2977 10.6376H6.64907C6.28871 10.6376 6.10853 10.8178 6.10853 11.1782V11.7187ZM22.7977 19.4214L22.5274 24.6241C22.9329 24.5791 23.3157 24.489 23.6761 24.3538L23.9464 19.6917L22.7977 19.4214ZM20.7707 14.1511L19.622 15.6376L20.3653 24.489C20.7256 24.5791 21.086 24.6466 21.4464 24.6917L21.7842 18.7457C21.7842 18.5655 21.8518 18.4304 21.9869 18.3403C22.032 18.2953 22.0545 18.2728 22.0545 18.2728L21.7842 15.2322L20.7707 14.1511ZM13.3383 17.1241L13.6761 17.8673C14.0815 18.0025 14.4869 18.1827 14.8923 18.4079L14.4193 17.1241H13.3383ZM15.8383 25.6376C15.7932 25.6376 15.7707 25.6376 15.7707 25.6376C15.5004 25.6376 15.2527 25.57 15.0274 25.4349C14.9374 25.3899 14.8473 25.3673 14.7572 25.3673C14.6671 25.3673 14.577 25.3899 14.4869 25.4349L13.3383 25.9755C13.113 26.1106 12.8653 26.1782 12.595 26.1782C12.3247 26.1782 12.077 26.1106 11.8518 25.9755L10.7031 25.4349C10.613 25.3899 10.5229 25.3673 10.4329 25.3673C10.3428 25.3673 10.2527 25.3899 10.1626 25.4349L9.01394 25.9755C8.78871 26.1106 8.54096 26.1782 8.27069 26.1782C8.00042 26.1782 7.75267 26.1106 7.52745 25.9755L6.3788 25.4349C6.28871 25.3899 6.19862 25.3673 6.10853 25.3673C6.01844 25.3673 5.92835 25.3899 5.83826 25.4349L4.95988 25.8403C4.64457 26.0205 4.30673 26.1106 3.94637 26.1106C3.58601 26.1106 3.24817 26.0205 2.93285 25.8403H2.86529C2.86529 26.2457 3.02294 26.6061 3.33826 26.9214C3.65358 27.2367 4.03646 27.3944 4.48691 27.3944H14.2166C14.6671 27.3944 15.05 27.2367 15.3653 26.9214C15.6806 26.6061 15.8383 26.2232 15.8383 25.7728C15.8383 25.7277 15.8383 25.6827 15.8383 25.6376ZM3.40583 29.5565H9.41934L8.54096 28.4755H3.40583C3.04547 28.4755 2.86529 28.6556 2.86529 29.016C2.86529 29.3764 3.04547 29.5565 3.40583 29.5565ZM10.9734 29.7592L11.9869 28.4755H9.95988L10.9734 29.7592ZM16.1085 24.4214C16.1986 24.3764 16.2662 24.2863 16.3112 24.1511H2.45988C2.59502 24.3764 2.7752 24.5565 3.00042 24.6917L3.40583 24.8944C3.58601 24.9845 3.76619 25.0295 3.94637 25.0295C4.12655 25.0295 4.30673 24.9845 4.48691 24.8944L5.36529 24.489C5.59051 24.3538 5.83826 24.2863 6.10853 24.2863C6.3788 24.2863 6.62655 24.3538 6.85177 24.489L8.00042 25.0295C8.09051 25.0746 8.1806 25.0971 8.27069 25.0971C8.36078 25.0971 8.45087 25.0746 8.54096 25.0295L9.68961 24.489C9.91484 24.3538 10.1626 24.2863 10.4329 24.2863C10.7031 24.2863 10.9509 24.3538 11.1761 24.489L12.3247 25.0295C12.4148 25.0746 12.5049 25.0971 12.595 25.0971C12.6851 25.0971 12.7752 25.0746 12.8653 25.0295L14.0139 24.489C14.2392 24.3538 14.4869 24.2863 14.7572 24.2863C15.0274 24.2863 15.2752 24.3538 15.5004 24.489C15.5905 24.534 15.6806 24.5565 15.7707 24.5565C15.8608 24.5565 15.9283 24.534 15.9734 24.489H16.041C16.041 24.4439 16.0635 24.4214 16.1085 24.4214ZM17.9329 22.9349C18.2932 23.4304 18.7437 23.8133 19.2842 24.0836L19.0815 21.7187L17.595 17.5295L16.7166 17.2592L16.3788 18.2052L17.122 20.5025C17.5725 21.2682 17.8428 22.0791 17.9329 22.9349ZM24.7572 23.8133C24.9374 23.6782 25.095 23.543 25.2302 23.4079L26.5815 16.3809L24.9599 15.7052L24.5545 18.7457H24.622C24.8923 18.8358 25.0274 19.016 25.0274 19.2863L24.7572 23.8133ZM10.4329 21.4484C10.4329 21.4484 10.3428 21.4484 10.1626 21.4484C9.9824 21.4484 9.89231 21.2682 9.89231 20.9079C9.89231 20.5475 10.0725 20.3673 10.4329 20.3673C10.7932 20.3673 10.9734 20.5475 10.9734 20.9079C10.9734 21.2682 10.7932 21.4484 10.4329 21.4484ZM8.27069 20.9079C8.27069 20.9079 8.1806 20.9079 8.00042 20.9079C7.82024 20.9079 7.73015 20.7277 7.73015 20.3673C7.73015 20.007 7.91033 19.8268 8.27069 19.8268C8.63105 19.8268 8.81123 20.007 8.81123 20.3673C8.81123 20.7277 8.63105 20.9079 8.27069 20.9079ZM6.64907 21.989C6.64907 21.989 6.55898 21.989 6.3788 21.989C6.19862 21.989 6.10853 21.8088 6.10853 21.4484C6.10853 21.0881 6.28871 20.9079 6.64907 20.9079C7.00943 20.9079 7.18961 21.0881 7.18961 21.4484C7.18961 21.8088 7.00943 21.989 6.64907 21.989ZM14.7572 21.989C14.7572 21.989 14.6671 21.989 14.4869 21.989C14.3067 21.989 14.2166 21.8088 14.2166 21.4484C14.2166 21.0881 14.3968 20.9079 14.7572 20.9079C15.1175 20.9079 15.2977 21.0881 15.2977 21.4484C15.2977 21.8088 15.1175 21.989 14.7572 21.989ZM4.48691 21.4484C4.48691 21.4484 4.39682 21.4484 4.21664 21.4484C4.03646 21.4484 3.94637 21.2682 3.94637 20.9079C3.94637 20.5475 4.12655 20.3673 4.48691 20.3673C4.84727 20.3673 5.02745 20.5475 5.02745 20.9079C5.02745 21.2682 4.84727 21.4484 4.48691 21.4484ZM12.595 20.9079C12.595 20.9079 12.5049 20.9079 12.3247 20.9079C12.1446 20.9079 12.0545 20.7277 12.0545 20.3673C12.0545 20.007 12.2347 19.8268 12.595 19.8268C12.9554 19.8268 13.1356 20.007 13.1356 20.3673C13.1356 20.7277 12.9554 20.9079 12.595 20.9079Z" fill="#192732"/>
          </g>
          <defs>
          <clipPath id="clip0_1_267">
          <rect width="35" height="35" fill="white" transform="matrix(1 0 0 -1 0.5 35.2998)"/>
          </clipPath>
          </defs>
          </svg>
        }/>
        <CategoriesSection title='Education Facilities' icon={<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <g clip-path="url(#clip0_1_276)">
          <path d="M34.1491 11.7192C34.8247 12.0345 35.2076 12.53 35.2977 13.2057C35.2977 13.8363 34.9148 14.3318 34.1491 14.6922L29.4869 16.9895V25.2327C29.4869 25.3228 29.4419 25.4354 29.3518 25.5706C29.1265 25.8408 28.9464 26.0548 28.8112 26.2124C28.6761 26.3701 28.2256 26.7868 27.4599 27.4624C26.6941 28.1381 25.9283 28.6787 25.1626 29.0841C24.3968 29.4895 23.3608 29.8836 22.0545 30.2665C20.7482 30.6494 19.3968 30.8408 18.0004 30.8408C13.3157 30.8408 9.50943 29.0841 6.5815 25.5706C6.49141 25.4354 6.44637 25.3228 6.44637 25.2327V16.9895L4.35177 15.9084V21.5841C5.16258 21.8994 5.56799 22.5075 5.56799 23.4084C5.56799 24.2642 5.18511 24.8498 4.41934 25.1651L6.1761 30.8408H1.1761L2.93285 25.1651C2.16709 24.8498 1.78421 24.253 1.78421 23.3746C1.78421 22.4962 2.18961 21.8994 3.00042 21.5841V15.2327L1.85177 14.6922C1.08601 14.2868 0.703125 13.7913 0.703125 13.2057C0.703125 12.5751 1.08601 12.0796 1.85177 11.7192L15.9734 4.96244C16.559 4.64713 17.291 4.48947 18.1693 4.48947C19.0477 4.48947 19.7797 4.64713 20.3653 4.96244L34.1491 11.7192ZM28.2031 25.03V17.53L20.3653 21.3814C19.7797 21.6967 19.0365 21.8543 18.1356 21.8543C17.3247 21.8543 16.604 21.7192 15.9734 21.4489L7.73015 17.53V25.03C8.00042 25.3453 8.36078 25.6944 8.81123 26.0773C9.26168 26.4602 9.90357 26.9557 10.7369 27.5638C11.5702 28.1719 12.6288 28.6674 13.9126 29.0503C15.1964 29.4332 16.559 29.6246 18.0004 29.6246C19.1716 29.6246 20.2977 29.4782 21.3788 29.1854C22.4599 28.8926 23.3608 28.566 24.0815 28.2057C24.8022 27.8453 25.4779 27.4287 26.1085 26.9557C26.7392 26.4827 27.2009 26.0998 27.4937 25.807C27.7865 25.5142 28.0229 25.2552 28.2031 25.03ZM33.6085 13.6111L34.0139 13.2057C34.0139 13.0706 33.8788 12.9579 33.6085 12.8678L19.8247 6.11109C19.3743 5.88587 18.8112 5.77325 18.1356 5.77325C17.5049 5.77325 16.9644 5.88587 16.5139 6.11109L2.39231 12.8678C2.12204 13.003 1.98691 13.1156 1.98691 13.2057C2.03195 13.3408 2.16709 13.476 2.39231 13.6111L3.81123 14.2868L17.9329 12.5976C18.3383 12.5525 18.5635 12.7327 18.6085 13.1381C18.6536 13.5435 18.4734 13.7687 18.068 13.8138L5.90583 15.2327L16.4464 20.3003C16.8968 20.5255 17.4599 20.6381 18.1356 20.6381C18.8112 20.6381 19.3743 20.5255 19.8247 20.3003L28.4058 16.1787C28.4959 15.9985 28.6311 15.9084 28.8112 15.9084L33.6085 13.6111Z" fill="#192732"/>
          </g>
          <defs>
          <clipPath id="clip0_1_276">
          <rect width="35" height="35" fill="white" transform="matrix(1 0 0 -1 0.5 35.2998)"/>
          </clipPath>
          </defs>
          </svg>
        }/>
      </div>
    </div>
  );
}