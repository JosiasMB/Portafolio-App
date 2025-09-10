import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  standalone: true,
})
export class Skills implements OnInit {
  ngOnInit() {}

  systemModel: {
    name: string;
    image: string;
  }[] = [
    {
      name: 'MacOs',
      image: 'macos',
    },
    {
      name: 'Windows',
      image: 'windows',
    },
    {
      name: 'Ubuntu',
      image: 'ubuntu',
    },
    {
      name: 'Kali Linux',
      image: 'kali',
    },
    {
      name: 'RedHat',
      image: 'redhat',
    },
    {
      name: 'Fedora',
      image: 'fedora',
    },
  ];

  dbModel: {
    name: string;
    image: string;
  }[] = [
    {
      name: 'MySQL',
      image: 'mysql',
    },
    {
      name: 'MongoDB',
      image: 'mongodb',
    },
    {
      name: 'phMyAdmin',
      image: 'phpmyadmin',
    },
    {
      name: 'PostgreSQL',
      image: 'postgresql',
    },
    {
      name: 'Oracle SQL',
      image: 'oracle',
    },
  ];

  techModel: {
    name: string;
    image: string;
  }[] = [
    {
      name: 'AngularJS',
      image: 'angular',
    },
    {
      name: 'JavaScript',
      image: 'javascript',
    },
    {
      name: 'TypeScript',
      image: 'typescript',
    },
    {
      name: 'HTML5',
      image: 'html',
    },
    {
      name: 'CSS3',
      image: 'css',
    },
    {
      name: 'Postman',
      image: 'postman',
    },
    {
      name: 'Git',
      image: 'git',
    },
    {
      name: 'GitHub',
      image: 'github',
    },
    {
      name: 'AWS',
      image: 'aws',
    },
    {
      name: 'Jira',
      image: 'jira',
    },
    {
      name: 'SQL',
      image: 'sql',
    },
    {
      name: 'Slack',
      image: 'slack',
    },
    {
      name: 'Azure',
      image: 'azure',
    },
    {
      name: 'GCP',
      image: 'gcp',
    },
    {
      name: 'Nylas API',
      image: 'nylas2',
    },
    {
      name: 'Salesforce',
      image: 'salesforce',
    },
    {
      name: 'Zendesk',
      image: 'zendesk',
    },
    {
      name: 'OpenSearch',
      image: 'opensearch',
    },
    {
      name: 'Microsoft Excel',
      image: 'ms',
    },
    {
      name: 'Microsoft Word',
      image: 'word',
    },
    {
      name: 'Microsoft Power Point',
      image: 'ppt',
    },
    {
      name: 'Google Sheets',
      image: 'sheets',
    },
  ];
}
