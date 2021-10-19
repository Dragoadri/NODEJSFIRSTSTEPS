import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
public title: string;
public project: Project;
public status:Boolean;
public filesToUpload: Array<File>;
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
    this.filesToUpload= [];
    this.status=false;
    this.title="Crear Proyecto"
    this.project = new Project('','','','',2021,'','');

}

  ngOnInit(): void {
  }

  onSubmit(form:any){
      console.log(this.project);
      this._projectService.saveProject(this.project).subscribe(
        response =>{
if (response.project) {
 
  this._uploadService.makeFileRequest("http://localhost:4200/api/upload-image/"+response.project._id,[],this.filesToUpload,"image")
  .then((result:any)=>{
     this.status=true;
    console.log(result);
     form.reset();
  });
 
} else {
  this.status=false;

}        },
        error =>{
          console.log(<any>error);
        }
      )
  }
  fileChangeEvent(fileInput:any){
    this.filesToUpload=<Array<File>>fileInput.target.files;
    console.log(fileInput);
  }

}
