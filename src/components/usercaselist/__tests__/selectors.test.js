import correctData from '../../../__mockdata__/correctUserCases';
import { selectById } from '../selectors';

describe('selectWithId', () => {
    it('should select usercase with id ID', () => {
        const userCase = selectById(1,correctData);

        expect(userCase.id).toEqual(1);
    });

    it('should return undefined with undefined id', () => {
        const userCase = selectById(undefined,correctData);

        expect(userCase).toEqual(undefined);
    });

    it('should return undefined with undefined as usercases', () => {
        const userCase = selectById(undefined);

        expect(userCase).toEqual(undefined);
    });

    it('should return undefined with object at index 0 not containing id', () => {
        const userCase = selectById(undefined,[{}]);

        expect(userCase).toEqual(undefined);
    });
});
