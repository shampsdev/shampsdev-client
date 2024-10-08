import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

type IconProps = React.HTMLAttributes<SVGElement>;
type ImageProps = React.HTMLAttributes<HTMLImageElement>;

export const Icons = {
  instagram: (props: IconProps) => (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-6 w-6', props.className)}
      {...props}
    >
      <path
        d='M3.51624 0.706055V2.29976H17.0628V0.706055H3.51624ZM17.0628 2.29976V4.15908H18.6883V2.29976H17.0628ZM18.6883 4.15908V17.44H20.3139V4.15908H18.6883ZM18.6883 17.44H17.0628V19.0337H18.6883V17.44ZM17.0628 19.0337H3.51624V20.6274H17.0628V19.0337ZM3.51624 19.0337V17.44H1.61972V19.0337H3.51624ZM1.61972 17.44V4.15908H-0.00585938V17.44H1.61972ZM1.61972 4.15908H3.51624V2.29976H1.61972V4.15908ZM14.3535 4.95594V6.54964H15.979V4.95594H14.3535ZM7.58019 6.54964V8.14335H12.7279V6.54964H7.58019ZM12.7279 8.14335V13.1901H14.3535V8.14335H12.7279ZM12.7279 13.1901H7.58019V14.7838H12.7279V13.1901ZM7.58019 13.1901V8.14335H5.95461V13.1901H7.58019Z'
        fill='currentColor'
      />
    </svg>
  ),
  telegram: (props: IconProps) => (
    <svg
      width='20'
      height='22'
      viewBox='0 0 20 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-6 w-6', props.className)}
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.314453 0.706055V2.29976H3.29469V0.706055H0.314453ZM3.29492 3.89338V2.29967H6.27516V3.89338H3.29492ZM6.27539 3.89335V5.48705H9.25562V3.89335H6.27539ZM9.25586 7.08109V5.48738H12.2361V7.08088H15.2146V8.67459H12.2344V7.08109H9.25586ZM15.2148 10.2683V8.67461H18.1951V10.2683H15.2148ZM18.1973 11.8624V10.2687H19.8228V11.8624H18.1973ZM0.314649 2.2998V6.01844H1.94023V2.2998H0.314649ZM1.94141 8.93982V6.01802H3.56699V8.93982H1.94141ZM15.2148 11.8622V13.4559H18.1951V11.8622H15.2148ZM12.2344 15.0494V13.4557H15.2146V15.0494H12.2344ZM9.25586 15.0495V16.6432H12.2361V15.0495H9.25586ZM6.27539 18.2369V16.6432H9.25562V18.2369H6.27539ZM3.29492 18.2367V19.8304H6.27516V18.2367H3.29492ZM0.314649 21.4243V19.8306H3.29488V21.4243H0.314649ZM0.314649 19.8305V16.1118H1.94023V19.8305H0.314649ZM1.94141 13.1898V16.1116H3.56699V13.1901H5.19218V8.94025H3.5666V13.1898H1.94141ZM5.19336 11.8618V10.2681H10.612V11.8618H5.19336Z'
        fill='currentColor'
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width='23'
      height='18'
      viewBox='0 0 23 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('h-6 w-6', props.className)}
      {...props}
    >
      <path
        d='M4.19848 0.666504V2.33989H19.3914V0.666504H4.19848ZM19.3914 2.33989V4.01329H21.0795V2.33989H19.3914ZM21.0795 4.01329V14.0536H22.7676V4.01329H21.0795ZM21.0795 14.0536H19.3914V15.727H21.0795V14.0536ZM19.3914 15.727H4.19848V17.4004H19.3914V15.727ZM4.19848 15.727V14.0536H2.51037V15.727H4.19848ZM2.51037 14.0536V4.01329H0.822266V14.0536H2.51037ZM2.51037 4.01329H4.19848V2.33989H2.51037V4.01329ZM9.26279 5.68668V12.3802H10.9509V11.5435H12.639V10.7069H14.3271V9.87015H16.0152V8.19676H14.3271V7.36007H12.639V6.52337H10.9509V5.68668H9.26279Z'
        fill='currentColor'
      />
    </svg>
  ),
  menu: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn('h-6 w-6', props.className)}
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 9h16.5m-16.5 6.75h16.5'
      />
    </svg>
  ),
  arrow: (props: IconProps) => (
    <svg
      width='17'
      height='9'
      viewBox='0 0 17 9'
      fill='none'
      strokeWidth={1.2}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1 4.5H16M16 4.5L12.3793 1M16 4.5L12.3793 8'
        stroke='black'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  cross: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn('h-6 w-6', props.className)}
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      viewBox='0 0 62 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('w-[93px] h-[41px]', props.className)}
      {...props}
    >
      <path
        d='M59.1008 16.5471L48.6665 21.6071V19.2029L56.3665 15.6986L56.288 15.8321V15.4943L56.3665 15.6357L48.6665 12.1236V9.72714L59.1008 14.7871V16.5471Z'
        fill='currentColor'
      />
      <path
        d='M2.15286 16.5471V14.7871L12.5871 9.72714V12.1236L4.88714 15.6357L4.95786 15.4943V15.8321L4.88714 15.6986L12.5871 19.2029V21.6071L2.15286 16.5471ZM21.7802 5.15428L16.5944 24.42H14.4966L19.6823 5.15428H21.7802Z'
        fill='currentColor'
      />
      <rect
        x='43.998'
        y='11.3144'
        width='1.25714'
        height='2.51429'
        fill='currentColor'
      />
      <rect
        x='23.8848'
        y='11.3144'
        width='1.25714'
        height='2.51429'
        fill='currentColor'
      />
      <rect
        x='42.7422'
        y='10.057'
        width='1.25714'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        x='41.4844'
        y='8.8002'
        width='1.25714'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='1.25714'
        transform='matrix(-1 0 0 1 26.3984 10.057)'
        fill='currentColor'
      />
      <rect
        x='42.7422'
        y='13.8285'
        width='1.25714'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='1.25714'
        transform='matrix(-1 0 0 1 26.3984 13.8285)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='1.25714'
        transform='matrix(-1 0 0 1 27.6562 8.8002)'
        fill='currentColor'
      />
      <rect
        x='38.9707'
        y='15.0858'
        width='3.77143'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        width='3.77143'
        height='1.25714'
        transform='matrix(-1 0 0 1 30.1699 15.0858)'
        fill='currentColor'
      />
      <rect
        width='2.51429'
        height='1.25714'
        transform='matrix(-1 0 0 1 32.6855 21.3715)'
        fill='currentColor'
      />
      <rect
        width='2.51429'
        height='1.25714'
        transform='matrix(-1 0 0 1 38.9707 21.3717)'
        fill='currentColor'
      />
      <rect
        width='3.77143'
        height='1.25714'
        transform='matrix(-1 0 0 1 36.457 22.6288)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='6.28571'
        transform='matrix(-1 0 0 1 30.1699 15.0858)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='6.28571'
        transform='matrix(-1 0 0 1 31.4277 15.0858)'
        fill='currentColor'
      />
      <rect
        width='2.51429'
        height='1.25714'
        transform='matrix(-1 0 0 1 32.6855 20.1147)'
        fill='currentColor'
      />
      <rect
        width='3.77143'
        height='1.25714'
        transform='matrix(-1 0 0 1 36.457 21.3715)'
        fill='currentColor'
      />
      <rect
        width='7.54286'
        height='1.25714'
        transform='matrix(-1 0 0 1 38.9707 15.0858)'
        fill='currentColor'
      />
      <rect
        width='2.51429'
        height='1.25714'
        transform='matrix(-1 0 0 1 28.9121 13.8285)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='1.25714'
        transform='matrix(-1 0 0 1 26.3984 12.5717)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='1.25714'
        transform='matrix(-1 0 0 1 26.3984 12.5717)'
        fill='currentColor'
      />
      <rect
        width='3.77143'
        height='1.25714'
        transform='matrix(-1 0 0 1 36.457 6.28555)'
        fill='currentColor'
      />
      <rect
        width='3.77143'
        height='1.25714'
        transform='matrix(-1 0 0 1 38.9707 7.54317)'
        fill='currentColor'
      />
      <rect
        width='3.77143'
        height='1.25714'
        transform='matrix(-1 0 0 1 41.4844 8.8002)'
        fill='currentColor'
      />
      <rect
        width='3.77143'
        height='1.25714'
        transform='matrix(-1 0 0 1 41.4844 8.8002)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='1.25714'
        transform='matrix(-1 0 0 1 42.7422 10.057)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='2.51429'
        transform='matrix(-1 0 0 1 43.998 11.3144)'
        fill='currentColor'
      />
      <rect
        width='1.25714'
        height='6.28571'
        transform='matrix(-1 0 0 1 40.2266 15.0858)'
        fill='currentColor'
      />
      <rect
        x='38.9707'
        y='7.54317'
        width='2.51429'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        x='36.457'
        y='6.28555'
        width='2.51429'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        x='27.6562'
        y='7.54337'
        width='2.51429'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        x='30.1699'
        y='6.28555'
        width='2.51429'
        height='1.25714'
        fill='currentColor'
      />
      <rect
        x='32.6855'
        y='5.02872'
        width='3.77143'
        height='1.25714'
        fill='currentColor'
      />
    </svg>
  ),
  computer: (props: ImageProps) => (
    <img
      src='/icons/computer.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block', props.className)}
    />
  ),
  trophey: (props: ImageProps) => (
    <img
      src='/icons/trophey.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block', props.className)}
    />
  ),
  heart: (props: ImageProps) => (
    <img
      src='/icons/heart.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block', props.className)}
    />
  ),
  spyglass: (props: ImageProps) => (
    <img
      src='/icons/spyglass.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block', props.className)}
    />
  ),
  plane: (props: ImageProps) => (
    <img
      src='/icons/plane.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block', props.className)}
    />
  ),
  dino: (props: ImageProps) => (
    <img
      src='/logo-icons/1.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block', props.className)}
    />
  ),
  time: (props: ImageProps) => (
    <img
      src='/logo-icons/2.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block object-contain', props.className)}
    />
  ),
  coffee: (props: ImageProps) => (
    <img
      src='/icons/coffee.png'
      alt='logo'
      className={twMerge('h-[2rem] w-[2rem] inline-block object-contain', props.className)}
    />
  ),
};
