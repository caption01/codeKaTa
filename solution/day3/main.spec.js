import {main} from "./main";

describe(`การเข้ารหัสแบบ Run-length เป็นวิธีการเข้ารหัสสตริงที่่ง่ายและเร็วที่สุด แนวคิดพื้นฐานที่สำคัญคือการนับสตริงแต่ละตัวที่ซ้ำกัน เช่น AABBB มี A สองตัวและ B สามตัวจะเข้ารหัสได้ว่า 2A3B`, () => {
	test('ให้สตริง AAAABBBCCDAA ควรคืนค่า 4A3B2C1D2A', () => {
	  expect(main('AAAABBBCCDAA')).toBe('4A3B2C1D2A')
	});
	test('ให้สตริง FFDDDWEWEEEZZZZZ ควรคืนค่า 2F3D1W1E1W3E5Z', () => {
		expect(main('FFDDDWEWEEEZZZZZ')).toBe('2F3D1W1E1W3E5Z')
	});
	test('ให้สตริง GGGSSSDDWWSSDDDHHHE ควรคืนค่า 3G3S2D2W2S3D3H1E', () => {
		expect(main('GGGSSSDDWWSSDDDHHHE')).toBe('3G3S2D2W2S3D3H1E')
	});
	test('ให้สตริง OOSDFPDLLLLLWEEEESWWW ควรคืนค่า 	2O1S1D1F1P1D5L1W4E1S3W', () => {
		expect(main('OOSDFPDLLLLLWEEEESWWW')).toBe('2O1S1D1F1P1D5L1W4E1S3W')
	});
	test('ให้สตริง EADFDDDDFFFFFCNNNNDDDDDDDDD ควรคืนค่า 1E1A1D1F4D5F1C4N9D', () => {
		expect(main('EADFDDDDFFFFFCNNNNDDDDDDDDDD')).toBe('1E1A1D1F4D5F1C4N10D')
	});
});