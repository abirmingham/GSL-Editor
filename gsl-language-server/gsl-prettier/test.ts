import { runPrettier } from '.';
import { postprocessGsl } from './Postprocessor';

const code = `
: "mm"
! mm doc stuff here
! mm doc stuff here
! mm doc stuff here
!--------
  ! msg rawr
  msgp "rawr" !   bar 
.
set np0 \\
  to np1 !     fooo bar
set a1 to 0            ! FOO bar biz baz
set b1 to 123          !FOO
set v1 to 1234123      ! FOO
! end
callmatch must_match "$check_night" in 11571
`;

console.log('BEFORE:');
console.log(code);
console.log('AFTER:');
runPrettier(code, 'lf')
    .then((val) => console.log(val))
    .catch((e) => console.error(e));
