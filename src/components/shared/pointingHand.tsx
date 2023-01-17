interface PropsType {
  fill?: string
}

const PointingHand = (props: PropsType) => {
  return (
    <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3950_44672)">
        <path
          d="M0.372793 13.3298C0.483049 13.0434 0.554526 12.7362 0.709165 12.4742C1.62064 10.9278 3.82809 10.8564 4.86711 12.3427C5.4553 13.183 6.00518 14.0482 6.57281 14.902C6.631 14.999 6.70607 15.0855 6.79472 15.1577V14.8808C6.79472 10.941 6.79472 7.0011 6.79472 3.06104C6.79472 2.11638 7.16847 1.3583 8.00426 0.856834C8.84006 0.355365 9.71743 0.328259 10.5794 0.783647C11.4413 1.23903 11.8973 1.96729 11.9104 2.91466C11.931 4.38021 11.9165 5.84667 11.9165 7.31267V7.57425C13.3204 6.98695 14.4771 7.26433 15.4012 8.44979C15.4479 8.41816 15.5068 8.38383 15.5619 8.34678C16.103 7.97895 16.7698 7.82703 17.4238 7.92262C18.0777 8.01821 18.6684 8.35396 19.0728 8.86C19.2022 9.00756 19.3479 9.14102 19.5073 9.25801C19.5461 9.28828 19.6358 9.26072 19.7017 9.25575C20.1885 9.21871 20.6799 9.12022 21.1602 9.15591C22.1819 9.23406 22.914 9.99937 23.0757 11.0732C23.1076 11.2966 23.1232 11.5218 23.1224 11.7473C23.1257 13.5142 23.1046 15.2815 23.1322 17.0479C23.1457 17.9248 23.2322 18.8022 23.3088 19.6773C23.5611 22.602 23.078 25.422 22.0035 28.148C21.6353 29.0854 21.5078 30.0504 21.3961 31.0276C21.3424 31.5051 21.3027 31.984 21.2532 32.462H8.9662C8.90391 31.5401 8.84161 30.6181 8.77932 29.6962C8.76632 29.4415 8.67507 29.1963 8.51723 28.9919C8.07014 28.4046 7.64266 27.8042 7.20911 27.2065C6.4149 26.106 5.71412 24.9589 5.21377 23.7016C5.03624 23.2535 4.89234 22.7877 4.66809 22.3621C3.51835 20.1814 2.34478 18.012 1.18523 15.8358C0.876887 15.2576 0.50781 14.7037 0.367187 14.0531L0.372793 13.3298ZM20.0847 31.2201C20.1189 30.9372 20.1506 30.6779 20.1814 30.4159C20.2777 29.5959 20.395 28.7868 20.6982 28.0003C21.0327 27.1311 21.3055 26.2356 21.5545 25.3393C22.0684 23.4997 22.1857 21.6244 22.0166 19.7297C21.9166 18.607 21.8124 17.4866 21.8329 16.3558C21.8605 14.8374 21.8404 13.3181 21.8386 11.7992C21.8401 11.6263 21.8319 11.4535 21.8138 11.2815C21.7563 10.771 21.4756 10.4123 21.0238 10.3861C20.6594 10.3649 20.2852 10.4349 19.9208 10.4941C19.7171 10.5275 19.6129 10.6802 19.6134 10.8907C19.6134 11.1238 19.6021 11.3565 19.6021 11.5896C19.6021 12.8302 19.6021 14.0707 19.5989 15.3113C19.6032 15.446 19.5835 15.5803 19.5405 15.7084C19.4857 15.8385 19.3858 15.9462 19.258 16.0129C19.1301 16.0797 18.9823 16.1014 18.8397 16.0744C18.5183 16.0098 18.3178 15.7545 18.3174 15.3935C18.3152 13.7319 18.3136 12.0703 18.3127 10.4087C18.3157 10.3038 18.3066 10.199 18.2856 10.096C18.1347 9.4717 17.5666 9.08091 16.9009 9.13739C16.2823 9.18934 15.795 9.69939 15.7563 10.3396C15.7493 10.4597 15.7563 10.5803 15.7563 10.701C15.7563 12.2728 15.7563 13.8444 15.7563 15.4157C15.7563 15.8128 15.4989 16.0802 15.1284 16.0829C14.7579 16.0857 14.4883 15.8069 14.486 15.403C14.486 15.2978 14.486 15.1925 14.486 15.0868C14.486 13.3199 14.486 11.553 14.4827 9.78613C14.4827 8.94222 13.7352 8.36214 12.8994 8.54737C12.3126 8.67793 11.923 9.17308 11.9216 9.81234C11.9179 11.6773 11.9216 13.5417 11.9216 15.4066C11.9216 15.7997 11.6633 16.0739 11.297 16.0807C10.9176 16.087 10.6513 15.8159 10.6499 15.4075C10.645 13.4752 10.6415 11.5429 10.6397 9.61084C10.6397 7.408 10.6471 5.2047 10.6457 3.00185C10.6453 2.85184 10.6209 2.7028 10.5733 2.56002C10.372 1.96277 9.7749 1.62846 9.12177 1.73463C8.52284 1.83221 8.08602 2.34949 8.08602 2.9761C8.08602 7.7649 8.08727 12.5546 8.08976 17.3452C8.08976 18.2487 8.08804 19.1511 8.08462 20.0522C8.08462 20.3712 7.91083 20.6075 7.63005 20.6879C7.18903 20.8144 6.80874 20.5194 6.80454 20.0337C6.798 19.2657 6.80454 18.4977 6.7994 17.7328C6.7994 17.6321 6.78491 17.5151 6.73118 17.4337C5.76411 15.9628 4.79206 14.4951 3.81502 13.0308C3.61226 12.7272 3.3184 12.5338 2.9311 12.5135C2.47466 12.4914 2.10652 12.668 1.85657 13.0339C1.57626 13.4469 1.58841 13.8846 1.82013 14.317C3.12233 16.7499 4.42532 19.1823 5.72907 21.614C5.82531 21.7947 5.93837 21.9691 6.00471 22.1593C6.4149 23.3366 6.8975 24.4828 7.61136 25.5209C8.29906 26.5221 9.0232 27.5002 9.7179 28.4972C9.84498 28.684 9.93673 28.8911 9.98887 29.1089C10.0552 29.3773 10.0697 29.6583 10.0959 29.9348C10.1356 30.359 10.1664 30.7841 10.2014 31.2183L20.0847 31.2201Z"
          fill="black"
        />
        <path
          fill={props.fill ? props.fill : 'none'}
          d="M20.0858 31.22H10.1969C10.1619 30.7859 10.131 30.3617 10.0913 29.9365C10.0651 29.66 10.0507 29.379 9.98432 29.1107C9.93218 28.8929 9.84044 28.6858 9.71336 28.499C9.01865 27.5019 8.29451 26.5238 7.60681 25.5227C6.89295 24.4836 6.41036 23.3384 6.00017 22.1611C5.93383 21.9709 5.82077 21.7956 5.72453 21.6158C4.42201 19.1834 3.11903 16.7511 1.81558 14.3187C1.58199 13.8864 1.57078 13.4486 1.85203 13.0357C2.10104 12.6698 2.46918 12.4936 2.92655 12.5153C3.31385 12.5342 3.60771 12.7289 3.81047 13.0325C4.78813 14.4966 5.76019 15.9642 6.72664 17.4355C6.78036 17.5168 6.79438 17.6338 6.79484 17.7346C6.80045 18.5026 6.79485 19.2706 6.79999 20.0355C6.80419 20.5211 7.18448 20.8161 7.6255 20.6896C7.90581 20.6092 8.07867 20.3734 8.08007 20.054C8.08319 19.1504 8.0849 18.2481 8.08522 17.347C8.08522 12.5582 8.08397 7.76848 8.08147 2.97787C8.08147 2.35127 8.5183 1.83399 9.11723 1.7364C9.77129 1.63024 10.3674 1.96455 10.5688 2.56179C10.6164 2.70457 10.6408 2.85362 10.6412 3.00363C10.6412 5.20647 10.6351 7.40977 10.6351 9.61261C10.6351 11.5447 10.6385 13.4769 10.6454 15.4093C10.6454 15.8159 10.9131 16.087 11.2924 16.0825C11.6587 16.0757 11.9171 15.8015 11.9171 15.4084C11.9171 13.5435 11.9171 11.679 11.9171 9.81411C11.9171 9.17304 12.3081 8.6779 12.8949 8.54914C13.7283 8.36391 14.4763 8.94399 14.4782 9.7879C14.4829 11.5548 14.4782 13.3217 14.4814 15.0886C14.4814 15.1938 14.4814 15.2991 14.4814 15.4048C14.4814 15.8087 14.7473 16.0874 15.1238 16.0847C15.5004 16.082 15.7508 15.8137 15.7517 15.4174C15.7536 13.8459 15.7536 12.2743 15.7517 10.7027C15.7517 10.5826 15.7471 10.4619 15.7517 10.3413C15.7905 9.70116 16.2778 9.19111 16.8963 9.13916C17.5621 9.08268 18.1302 9.47347 18.2811 10.0978C18.3021 10.2007 18.3111 10.3056 18.3082 10.4104C18.3103 12.0721 18.3119 13.7337 18.3128 15.3953C18.3128 15.7567 18.5137 16.0115 18.8352 16.0761C18.9777 16.1032 19.1256 16.0815 19.2534 16.0147C19.3812 15.9479 19.4811 15.8403 19.5359 15.7102C19.5789 15.5821 19.5987 15.4477 19.5943 15.3131C19.5985 14.0725 19.5943 12.8319 19.5976 11.5914C19.5976 11.3583 19.6097 11.1256 19.6088 10.8925C19.6088 10.682 19.7125 10.5311 19.9162 10.4958C20.2806 10.4366 20.6548 10.3666 21.0192 10.3879C21.471 10.4141 21.7518 10.7728 21.8092 11.2833C21.8273 11.4553 21.8356 11.6281 21.834 11.801C21.834 13.3199 21.856 14.8392 21.8284 16.3576C21.8078 17.487 21.912 18.6088 22.012 19.7314C22.1811 21.6262 22.0643 23.5015 21.55 25.3411C21.2991 26.2374 21.0281 27.1328 20.6936 28.002C20.3904 28.7886 20.2731 29.5977 20.1769 30.4177C20.1517 30.6779 20.1199 30.9377 20.0858 31.22Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_3950_44672">
          <rect width="23" height="32" fill="white" transform="translate(0.373047 0.462402)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PointingHand
