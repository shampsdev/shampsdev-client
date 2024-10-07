import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';

type IconProps = React.HTMLAttributes<SVGElement>;

export const TextLogo = {
  s: (props: IconProps) => (
    <svg
      width='66'
      height='76'
      viewBox='0 0 66 76'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(props.className)}
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.7605 0.17363H54.7436V11.1301H11.7605V0.17363ZM53.148 11.133H65.8838V22.0895H53.148V11.133ZM22.9028 11.1329H0.615234V33.0459H10.163V42.4321H43.5996V64.3437H65.8871V42.4307H54.738V33.0408H22.9028V11.1329ZM10.163 64.3521H56.33V75.3086H10.163V64.3521ZM11.759 53.3909H0.615234V64.3474H11.759V53.3909Z'
        fill='black'
      />
    </svg>
  ),
  h: (props: IconProps) => (
    <svg
      width='105'
      height='123'
      viewBox='0 0 105 123'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(props.className)}
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.837891 0.453934H25.8545V7.90784H32.3002V59.634H39.2012V48.6801H50.3449V59.6366H40.791V70.5905H32.3002V122.168H16.0015V9.39801H0.837891V0.453934ZM82.1809 37.7207H82.7128V100.847H93.8488V111.803H82.7128V119.708H67.5512V48.6772H48.7496V37.7207H67.5512H82.1809ZM104.994 89.8926H93.8498V100.849H104.994V89.8926Z'
        fill='black'
      />
    </svg>
  ),
  a: (props: IconProps) => (
    <svg
      width='86'
      height='86'
      viewBox='0 0 86 86'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(props.className)}
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M51.3183 0H16.8223V6.56787H5.33203V11.4959H23.4014V6.57067H38.1777V11.4959H57.8897V6.56787H51.3183V0ZM0.400391 11.4999H16.8271V27.9265H0.400391V11.4999ZM62.8252 11.4994H44.7559V78.8487H49.6777V85.4193H79.2457V78.8491H85.8223V73.9211H72.6809V78.8486H62.8252V11.4994ZM44.7522 73.9197H39.8244V78.8473H34.9V85.4164H5.33203V78.8473H0.400391V73.9197V73.9193V68.9917H16.8271V73.9193H39.8242V68.9917H44.7522V73.9197ZM16.8307 55.8509H11.8991V68.9916H0.400391V50.9222H5.33203V45.9949H16.8223V45.9944H23.4004V39.4242H44.7551V45.9949H28.3209V50.9224H16.8307V55.8509Z'
        fill='black'
      />
    </svg>
  ),
  m: (props: IconProps) => (
    <svg
      width='126'
      height='75'
      viewBox='0 0 126 75'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(props.className)}
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M24.8211 0.174591H8.52241V7.62743H0.943359V15.0808V17.8386H8.52241V74.7086H24.8211V28.0525H34.0681V17.8414H24.8211V0.174591ZM70.3108 0.174591H55.2927H54.0121H41.6473V7.6285H31.2676V17.8397H41.6533V10.3857H54.0121V74.7086H70.3108V28.0525H79.5572V17.8414H70.3108V0.174591ZM100.782 0.174591H115.794V55.3269H125.041V65.5381H115.794V74.7086H99.4957V10.3857H87.1374V17.8397H76.7517V7.6285H87.1363V0.174591H99.4957H100.782Z'
        fill='black'
      />
    </svg>
  ),
  p: (props: IconProps) => (
    <svg
      width='79'
      height='116'
      viewBox='0 0 79 116'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={twMerge('translate-y-10', props.className)}
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M27.8385 0.174576H11.5398V105.043H1.9791V116H24.2666V105.044H27.8385V73.7373H59.6656V64.3447H69.2267V53.392H78.7739V11.1312H58.0783V53.3882H48.5311V62.7808H27.8385V22.0905H37.3781V11.134H27.8385V0.174576ZM11.5383 11.134H0.394531V22.0905H11.5383V11.134ZM69.2291 0.174576H35.7979V11.1311H69.2291V0.174576Z'
        fill='black'
      />
    </svg>
  )
};
