import correctData from '../../../__mockdata__/correctUsecases';
import selectById from '../../usecaselist/selectors';

describe('selectWithId', () => {
    it('should select usecase with id ID', () => {
        const usecase = selectById(1, correctData);

        expect(usecase.id).toEqual(1);
    });

    it('should return undefined with undefined id', () => {
        const usecase = selectById(undefined, correctData);

        expect(usecase).toEqual(undefined);
    });

    it('should return undefined with undefined as usecases', () => {
        const usecase = selectById(undefined);

        expect(usecase).toEqual(undefined);
    });

    it('should return undefined with object at index 0 not containing id', () => {
        const usecase = selectById(undefined, [{}]);

        expect(usecase).toEqual(undefined);
    });
});
