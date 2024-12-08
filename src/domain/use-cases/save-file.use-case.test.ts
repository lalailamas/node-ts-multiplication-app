import { SaveFile } from "./save-file.use-case";
import fs from 'fs'


describe('SaveFileUseCase', () => {
    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs',
        fileName: 'custom-table-name'
    }
    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`

    afterEach(()=>{
        // clean up
        const outputFolderExists = fs.existsSync('outputs')
        if (outputFolderExists) fs.rmSync('outputs', {recursive: true})

        const customOutputFolderExists = fs.existsSync('custom-outputs')
        if (customOutputFolderExists) fs.rmSync('custom-outputs', {recursive: true})
    })

    test('should save file with default values', ()=>{
        //1: Arrange. Preparación
        const saveFile = new SaveFile()
        const filePath = 'outputs/table.txt'
        const options = {
            fileContent: 'test content'
        }

        //2: Act. Estímulo
        const result = saveFile.execute(options);

        //3: Assert. Aserciones
        const fileExists = fs.existsSync(filePath)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        
        expect(result).toBe(true)
        expect(fileExists).toBe(true)
        expect(fileContent).toBe(options.fileContent)
    })

    test('should save file with custom values', ()=>{
        //1: Arrange. Preparación
        const saveFile = new SaveFile()

        //2: Act. Estímulo
        const result = saveFile.execute(customOptions);

        //3: Assert. Aserciones
        const fileExists = fs.existsSync(customFilePath)
        const fileContent = fs.readFileSync(customFilePath, 'utf-8')
        
        expect(result).toBe(true)
        expect(fileExists).toBe(true)
        expect(fileContent).toBe(customOptions.fileContent)
    })

    test('should return false if directory could not be created', ()=>{
        const saveFile = new SaveFile()
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This a custom error message from testing') }    
        );
        const result = saveFile.execute(customOptions);
        expect(result).toBe(false)

        mkdirSpy.mockRestore()
    })

    test('should return false if file could not be created', ()=>{
        const saveFile = new SaveFile()
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('This a custom write error message from testing') }    
        );
        const result = saveFile.execute({ fileContent: 'Hola'});
        expect(result).toBe(false)

        writeFileSpy.mockRestore()
    })



})